# Select features
df = df[['Survived', 'Pclass', 'Sex', 'Age', 'SibSp', 'Parch']]

# Drop missing values (AutoAI handles this automatically)
df.dropna(inplace=True)

# Encode categorical columns
le = LabelEncoder()
df['Sex'] = le.fit_transform(df['Sex'])  # male=1, female=0

# Features and target
X = df.drop('Survived', axis=1)
y = df['Survived']

# Feature scaling
scaler = StandardScaler()
X_scaled = scaler.fit_transform(X)
