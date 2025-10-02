import joblib

# Save the model
joblib.dump(best_model, "autoai_model.pkl")

# Load it later
model = joblib.load("autoai_model.pkl")
