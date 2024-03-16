[MongoDB là gì](https://topdev.vn/blog/mongodb-la-gi/?amp&utm_source=google&utm_medium=cpc&utm_campaign=topdev&utm_content=performance&gad_source=1&gclid=CjwKCAjw17qvBhBrEiwA1rU9www6jSRuBh58G67QdvpqFYkNvXZXTa_CXRYm90wmQf1REvkfokZH-BoClT4QAvD_BwE) \
[MongoDB Atlas](https://www.mongodb.com/atlas/database) \
[Nodejs environment variables](https://viblo.asia/p/lam-viec-voi-environment-variables-trong-nodejs-maGK7ONeKj2) \
[Nodejs apis với mongodb](https://viblo.asia/p/crud-voi-nodejs-express-va-mongodb-RnB5pxV25PG) 

## INDEXING
```
100 id
a muốn tìm document với id 25
for cơ bản thì 25 lần
index chỉ 2 lần
1[địa chỉ doc 1] ... 50[địa chỉ doc 50] ... 100[địa chỉ doc 100]
1[địa chỉ doc 1] ... 25[địa chỉ doc 25] ... 50[địa chỉ doc 50]
100/2 
50/2 -> 25[địa chỉ doc 25]
```

## TRANSACTION ???

## Rest APIs CRUD cho product
```
/product        POST    TẠO PRODUCT
/product        GET     LẤY TẤT CẢ PRODUCT
/product/:id    GET     LẤY PRODUCT THEO ID
/product/:id    UPDATE  CẬP NHẬT PRODUCT THEO ID
/product/:id    DELETE  XÓA PRODUCT THEO ID

{
    "name": "name",
    "price": 10000,
    "desc": "description"
}

Độ khó medium
Dựa vào api get all product mình cần filter theo name hoặc price
/product        GET     LẤY TẤT CẢ PRODUCT
request param:
min=0
max=100000
name="name"

Độ khó hard
viết 1 api để tạo order theo product
/checkout        POST    TẠO ORDER
Request body:
[
    {
        "productId": "productId1",
        "quantity": 3
    },
    {
        "productId": "productId2",
        "quantity": 3
    }
]

viết 1 api để get all orders
/ORDER        GET     LẤY TẤT CẢ ORDER
Response
[
    // ORDER COLLECTION
    {
        "orderId": 1,
        // ORDER DETAIL COLLECTION
        "orderDetails": [
            {
                "orderDetailId": 1,
                "quantity": 3,
                // PRODUCT COLLECTION
                "product": {
                    "id": 1,
                    "name": "name",
                    "price": 10000,
                    "desc": "description"
                }
            },
            {
                "orderDetailId": 2,
                "quantity": 3,
                "product": {
                    "id": 2,
                    "name": "name",
                    "price": 10000,
                    "desc": "description"
                }
            }
        ]
    },
    ...
]
```