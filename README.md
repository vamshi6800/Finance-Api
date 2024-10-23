# Personal Finance API

## Setup Instructions

1. Clone the repository:
    ```bash
    git clone <repository_url>
    cd finance-api
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Run the application:
    ```bash
    npm start
    ```

## API Endpoints

- **POST /transactions**: Add a new transaction
- **GET /transactions**: Get all transactions
- **GET /transactions/:id**: Get transaction by ID
- **PUT /transactions/:id**: Update a transaction
- **DELETE /transactions/:id**: Delete a transaction
- **GET /summary**: Get a summary of income, expenses, and balance
