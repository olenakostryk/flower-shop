# 🌸 Flower Shop – Full Stack E-Commerce Website

A modern full-stack flower shop application built with **React** and **Django REST Framework**. The project allows users to browse flowers, search products, view detailed information, manage a shopping cart, and place orders through a responsive and user-friendly interface.

---

## 🚀 Live Demo

### Frontend (Vercel)

https://flower-shop-ivory-mu.vercel.app

### Backend API (Render)

https://flower-shop-97cd.onrender.com/api/flowers/

---

## ✨ Features

### Customer Features

- 🌸 Browse all flower bouquets
- 🔍 Search flowers by name
- 🛍️ View detailed product pages
- 🛒 Add products to cart
- ➕ Increase or decrease product quantity
- 💳 Checkout page with billing information
- 📦 Place orders
- 📱 Fully responsive design

### Admin Features

- Manage flower products
- Manage categories
- View customer orders
- Update product information
- Control stock availability

---

# 🛠️ Technologies Used

## Frontend

- React
- React Router DOM
- Axios
- Tailwind CSS
- React Icons
- Context API

## Backend

- Django
- Django REST Framework
- PostgreSQL
- WhiteNoise
- Pillow
- Gunicorn

## Deployment

- Vercel
- Render

---

# 📂 Project Structure

```
Flower_Shop/
│
├── backend/
│   ├── config/
│   ├── shop/
│   ├── media/
│   ├── manage.py
│   └── requirements.txt
│
├── frontend/
│   ├── src/
│   │   ├── api/
│   │   ├── components/
│   │   ├── context/
│   │   ├── hooks/
│   │   ├── pages/
│   │   ├── router/
│   │   ├── services/
│   │   └── App.jsx
│   └── package.json
│
└── README.md
```

---

# ⚙️ Installation

## Clone Repository

```bash
git clone https://github.com/olenakostryk/Flower_Shop.git
```

---

## Backend Setup

```bash
cd backend

python -m venv venv

source venv/bin/activate
```

Windows

```bash
venv\Scripts\activate
```

Install dependencies

```bash
pip install -r requirements.txt
```

Run migrations

```bash
python manage.py migrate
```

Start server

```bash
python manage.py runserver
```

Backend runs on

```
http://127.0.0.1:8000/
```

---

## Frontend Setup

```bash
cd frontend
```

Install packages

```bash
npm install
```

Start development server

```bash
npm run dev
```

Frontend runs on

```
http://localhost:5173/
```

---

# 🔗 API Endpoints

## Flowers

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | `/api/flowers/` | Get all flowers |
| GET | `/api/flowers/<slug>/` | Get flower details |

## Orders

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | `/api/orders/` | Create new order |

---

# 📦 Main Functionalities

- Product Listing
- Product Details
- Search Functionality
- Shopping Cart
- Checkout System
- Order Creation
- Django Admin Panel
- Responsive UI
- REST API

---

# 🌐 Deployment

## Frontend

Hosted on **Vercel**

```
https://flower-shop-ivory-mu.vercel.app
```

## Backend

Hosted on **Render**

```
https://flower-shop-97cd.onrender.com
```

---

# 📈 Future Improvements

- User Authentication
- User Accounts
- Wishlist
- Product Reviews
- Online Payments (Stripe)
- Order History
- Email Confirmation
- Product Filtering
- Pagination
- Favorites

---

# 👩‍💻 Author

**Olena Kostryk**

Software Engineering Student

GitHub:

https://github.com/olenakostryk

---

# 📄 License

This project was developed for educational and portfolio purposes.
