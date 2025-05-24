from preprocessing.data_processor import PlayStoreDataProcessor
from models.model_trainer import PlayStoreModelTrainer
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns
from pathlib import Path

def setup_directories():
    """
    Create necessary directories if they don't exist
    """
    directories = ['data/raw', 'data/processed', 'models', 'reports/figures']
    for dir_path in directories:
        Path(dir_path).mkdir(parents=True, exist_ok=True)

def plot_feature_importance(importance_dict, title, output_path):
    """
    Plot feature importance
    """
    plt.figure(figsize=(10, 6))
    features = list(importance_dict.keys())
    importances = list(importance_dict.values())
    
    sns.barplot(x=importances, y=features)
    plt.title(title)
    plt.tight_layout()
    plt.savefig(output_path)
    plt.close()

def main():
    # Setup project structure
    setup_directories()
    
    # Initialize processor and trainer
    processor = PlayStoreDataProcessor()
    trainer = PlayStoreModelTrainer()
    
    # Load and process data
    print("Loading and processing data...")
    X, y = processor.prepare_data('data/raw/playstore_apps.csv')
    
    if X is None or y is None:
        print("Error processing data. Exiting...")
        return
    
    # Train success prediction model
    print("\nTraining success prediction model...")
    success_results = trainer.train_success_predictor(X, y)
    print(f"Success Model Accuracy: {success_results['accuracy']:.4f}")
    print(f"Success Model AUC: {success_results['auc']:.4f}")
    
    # Plot success model feature importance
    plot_feature_importance(
        success_results['feature_importance'],
        'Feature Importance - Success Prediction',
        'reports/figures/success_feature_importance.png'
    )
    
    # Train churn prediction model
    print("\nTraining churn prediction model...")
    churn_results = trainer.train_churn_predictor(X, y)  # Using same target for demonstration
    print(f"Churn Model Accuracy: {churn_results['accuracy']:.4f}")
    
    # Plot churn model feature importance
    plot_feature_importance(
        churn_results['feature_importance'],
        'Feature Importance - Churn Prediction',
        'reports/figures/churn_feature_importance.png'
    )
    
    # Perform clustering
    print("\nPerforming app segmentation...")
    cluster_results = trainer.perform_clustering(X)
    print(f"Clustering Silhouette Score: {cluster_results['silhouette_score']:.4f}")
    
    # Save models
    print("\nSaving models...")
    trainer.save_models('models/playstore')
    
    # Example predictions
    print("\nMaking example predictions...")
    sample_app = X.iloc[[0]]  # Using first app as example
    
    success_prob = trainer.predict_success(sample_app)[0]
    churn_prob = trainer.predict_churn(sample_app)[0]
    segment = trainer.get_app_segment(sample_app)[0]
    
    print(f"Example App Predictions:")
    print(f"Success Probability: {success_prob:.4f}")
    print(f"Churn Probability: {churn_prob:.4f}")
    print(f"App Segment: {segment}")

if __name__ == "__main__":
    main() 