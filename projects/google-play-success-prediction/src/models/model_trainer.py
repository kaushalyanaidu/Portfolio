import numpy as np
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LogisticRegression
from sklearn.ensemble import RandomForestClassifier
from sklearn.cluster import KMeans
from sklearn.metrics import accuracy_score, roc_auc_score, silhouette_score
import joblib

class PlayStoreModelTrainer:
    def __init__(self):
        self.success_model = None
        self.churn_model = None
        self.cluster_model = None
        
    def train_success_predictor(self, X, y, test_size=0.2, random_state=42):
        """
        Train logistic regression model for app success prediction
        """
        # Split data
        X_train, X_test, y_train, y_test = train_test_split(
            X, y, test_size=test_size, random_state=random_state
        )
        
        # Initialize and train model
        self.success_model = LogisticRegression(random_state=random_state)
        self.success_model.fit(X_train, y_train)
        
        # Evaluate model
        y_pred = self.success_model.predict(X_test)
        accuracy = accuracy_score(y_test, y_pred)
        auc = roc_auc_score(y_test, self.success_model.predict_proba(X_test)[:, 1])
        
        return {
            'accuracy': accuracy,
            'auc': auc,
            'feature_importance': dict(zip(X.columns, self.success_model.coef_[0]))
        }
        
    def train_churn_predictor(self, X, y, test_size=0.2, random_state=42):
        """
        Train random forest model for churn prediction
        """
        # Split data
        X_train, X_test, y_train, y_test = train_test_split(
            X, y, test_size=test_size, random_state=random_state
        )
        
        # Initialize and train model
        self.churn_model = RandomForestClassifier(
            n_estimators=100,
            random_state=random_state
        )
        self.churn_model.fit(X_train, y_train)
        
        # Evaluate model
        y_pred = self.churn_model.predict(X_test)
        accuracy = accuracy_score(y_test, y_pred)
        
        return {
            'accuracy': accuracy,
            'feature_importance': dict(zip(X.columns, self.churn_model.feature_importances_))
        }
        
    def perform_clustering(self, X, n_clusters=6, random_state=42):
        """
        Perform K-means clustering for app segmentation
        """
        # Initialize and train model
        self.cluster_model = KMeans(
            n_clusters=n_clusters,
            random_state=random_state
        )
        cluster_labels = self.cluster_model.fit_predict(X)
        
        # Calculate silhouette score
        silhouette_avg = silhouette_score(X, cluster_labels)
        
        return {
            'cluster_labels': cluster_labels,
            'silhouette_score': silhouette_avg,
            'cluster_centers': self.cluster_model.cluster_centers_
        }
        
    def predict_success(self, X):
        """
        Predict app success probability
        """
        if self.success_model is None:
            raise ValueError("Success prediction model not trained yet")
        return self.success_model.predict_proba(X)[:, 1]
        
    def predict_churn(self, X):
        """
        Predict churn probability
        """
        if self.churn_model is None:
            raise ValueError("Churn prediction model not trained yet")
        return self.churn_model.predict_proba(X)[:, 1]
        
    def get_app_segment(self, X):
        """
        Get app segment/cluster
        """
        if self.cluster_model is None:
            raise ValueError("Clustering model not trained yet")
        return self.cluster_model.predict(X)
        
    def save_models(self, path_prefix):
        """
        Save all trained models
        """
        if self.success_model:
            joblib.dump(self.success_model, f"{path_prefix}_success_model.joblib")
        if self.churn_model:
            joblib.dump(self.churn_model, f"{path_prefix}_churn_model.joblib")
        if self.cluster_model:
            joblib.dump(self.cluster_model, f"{path_prefix}_cluster_model.joblib")
            
    def load_models(self, path_prefix):
        """
        Load all saved models
        """
        try:
            self.success_model = joblib.load(f"{path_prefix}_success_model.joblib")
            self.churn_model = joblib.load(f"{path_prefix}_churn_model.joblib")
            self.cluster_model = joblib.load(f"{path_prefix}_cluster_model.joblib")
        except Exception as e:
            print(f"Error loading models: {str(e)}") 