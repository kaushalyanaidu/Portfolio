import pandas as pd
import numpy as np
from sklearn.preprocessing import StandardScaler, LabelEncoder
from sklearn.impute import SimpleImputer

class PlayStoreDataProcessor:
    def __init__(self):
        self.label_encoders = {}
        self.scaler = StandardScaler()
        self.imputer = SimpleImputer(strategy='median')
        
    def load_data(self, filepath):
        """
        Load the Google Play Store dataset
        """
        try:
            df = pd.read_csv(filepath)
            print(f"Successfully loaded {len(df)} records")
            return df
        except Exception as e:
            print(f"Error loading data: {str(e)}")
            return None

    def clean_installs(self, installs):
        """
        Convert install strings to numeric values
        """
        if pd.isna(installs):
            return np.nan
        return int(str(installs).replace(',', '').replace('+', ''))

    def clean_price(self, price):
        """
        Convert price strings to numeric values
        """
        if pd.isna(price):
            return 0.0
        return float(str(price).replace('$', ''))

    def preprocess_features(self, df):
        """
        Preprocess all features in the dataset
        """
        # Create a copy to avoid modifying original data
        df_processed = df.copy()
        
        # Clean numeric columns
        df_processed['Installs'] = df_processed['Installs'].apply(self.clean_installs)
        df_processed['Price'] = df_processed['Price'].apply(self.clean_price)
        
        # Handle missing values
        numeric_columns = ['Rating', 'Installs', 'Price']
        df_processed[numeric_columns] = self.imputer.fit_transform(df_processed[numeric_columns])
        
        # Encode categorical variables
        categorical_columns = ['Category', 'Content_Rating', 'Type']
        for col in categorical_columns:
            if col not in self.label_encoders:
                self.label_encoders[col] = LabelEncoder()
            df_processed[col] = self.label_encoders[col].fit_transform(df_processed[col])
        
        # Scale numeric features
        df_processed[numeric_columns] = self.scaler.fit_transform(df_processed[numeric_columns])
        
        return df_processed

    def create_success_label(self, df, installs_threshold=100000, rating_threshold=4.0):
        """
        Create binary success label based on installs and rating thresholds
        """
        return ((df['Installs'] >= installs_threshold) & 
                (df['Rating'] >= rating_threshold)).astype(int)

    def prepare_data(self, filepath):
        """
        Complete data preparation pipeline
        """
        # Load data
        df = self.load_data(filepath)
        if df is None:
            return None, None
        
        # Preprocess features
        df_processed = self.preprocess_features(df)
        
        # Create target variable
        y = self.create_success_label(df)
        
        # Select features for modeling
        feature_columns = ['Rating', 'Installs', 'Price', 'Category', 
                         'Content_Rating', 'Type']
        X = df_processed[feature_columns]
        
        return X, y

    def get_feature_names(self):
        """
        Return the names of processed features
        """
        return ['Rating', 'Installs', 'Price', 'Category', 
                'Content_Rating', 'Type'] 