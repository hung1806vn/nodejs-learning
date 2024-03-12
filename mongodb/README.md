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
```