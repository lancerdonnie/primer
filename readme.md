# **:triangular_flag_on_post: PrimeR**

> A prime number generator

### Live url at [primer-omega.vercel.app](https://primer-omega.vercel.app)!

---

Before cloning the repo **be sure** you have installed:

- [**NODE**](https://www.google.com/search?q=how+to+install+node) (version >=14.0.0)

Then:

```bash
git clone https://github.com/lancerdonnie/primer.git
cd primer
```

---

## **Frontend**

### **:package: Tools used**

- [x] NextJS
- [x] Typescipt
- [x] Tailwind

### Start

```bash
cd frontend
npm run install
npm run dev
# visit [localhost:3008](http://localhost:3008)
```

### Test

```bash
npm test
```

---

## **Backend**

### **:package: Tools used**

- [x] Typescipt
- [x] NodeJS
- [x] AWS Lambda
- [x] DynamoDB

### Start

```bash
cd backend
npm run install
npm run test
# visit [localhost:8008](http://localhost:8008)
```

---

## **Deployment**

### Frontend

Application is automatically deployed on push, to vercel
Link your vercel account to the repo

### Backend

Application is automatically deployed to AWS on push using github actions
Add the following secrets to your github action:

- AWS_ACCESS_KEY_ID
- AWS_SECRET_ACCESS_KEY
