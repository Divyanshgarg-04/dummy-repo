from flask import Flask, request, jsonify
from flask_cors import CORS
import pickle
import numpy as np
import os
from joblib import Parallel, delayed 
import joblib 

app = Flask(__name__)
CORS(app)
# Load the model from pickle file
MODEL_PATH = "model.pkl" # Update this path to your model's location


# Load model on startup
print("Loading model from:", MODEL_PATH)
try:
    model = joblib.load('model.pkl') 
    print("Model loaded successfully!")
    print(type(model))

except Exception as e:
    print(f"Error loading model: {e}")
    model = None

@app.route('/predict', methods=['POST'])
def predict():
    if model is None:
        return jsonify({"error": "Model not loaded properly"}), 500
    
    print("Model type:", type(model))  # Debugging step
    
    try:
        data = request.json
        if not data or 'features' not in data:
            return jsonify({"error": "No features provided. Please send 'features' in the request body"})
        
        features = np.array(data['features'])
        # print("Here -> ",features)
        
        # Check if model has a predict method
        if not hasattr(model, "predict"):
            return jsonify({"error": "Loaded object is not a valid ML model"})
        
        print("Here ",features)
        features = features.reshape(-1, 1)
        prediction = model.predict(features)
        print("Prediction",prediction)
        if isinstance(prediction, np.ndarray):
            prediction = prediction.tolist()
        
        return jsonify({"prediction": prediction})
    
    except Exception as e:
        return jsonify({"error": f"Prediction error: {str(e)}"}), 500

@app.route('/model-info', methods=['GET'])
def model_info():
    """Return basic information about the loaded model"""
    if model is None:
        return jsonify({"error": "Model not loaded"}), 500

    # Get model type and parameters if possible
    try:
        model_type = type(model).__name__

        # Try to get model parameters (this varies by model type)
        if hasattr(model, 'get_params'):
            params = model.get_params()
        else:
            params = "Not available"

        return jsonify({
            "model_type": model_type,
            "parameters": params
        })
    except Exception as e:
        return jsonify({"error": f"Error getting model info: {str(e)}"}), 500

if __name__ == '__main__':
    # Set host to 0.0.0.0 to make it accessible from other machines in your network
    # Set debug=False for production use
    port = int(os.environ.get('PORT', 5000))
    app.run(host='0.0.0.0', port=port, debug=True)