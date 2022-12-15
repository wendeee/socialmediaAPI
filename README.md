<!-- ABOUT THE PROJECT -->
# A Backend API for a Social Media Platform (LinkUp)

LinkUp is a backend API for a social media platform built by <a href="https://github.com/wendeee">Chinwendu Enyinna</a> using a couple JavaScript-based server side technologies. This API follows the REST architectural design pattern.

--- 
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![Linkedin Badge](https://img.shields.io/badge/-wendeee-blue?style=for-the-badge&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/enyinna-chinwendu-promise/)](https://www.linkedin.com/in/enyinna-chinwendu-promise/)
[![Twitter Badge](https://img.shields.io/badge/-@wendeee-1ca0f1?style=for-the-badge&logo=twitter&logoColor=white&link=https://twitter.com/_ChinwenduE)](https://twitter.com/_ChinwenduE)
[![AltSchool Badge](https://img.shields.io/badge/-Engineering-6773E5?style=for-the-badge&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIcAAACHCAYAAAA850oKAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAcmSURBVHgB7d3/kZtGFAfwbzL5P0oF2VRwlwq8qcBKBUcqsFyBSAW5VGBcgS8ViFRwdgW3qeDcgaM3wBy3egu7sBLY9/3MMD6h5QnBg/0ByAARERERERERERERERERERERERERERERERERERERERERERERERFdwHc4DxtR5uNx+hxRbnOcriOWjS1HC7LH6UvEVETGK5RlzYxyFOl75Fco894r816BVu0cyaHt9Fucnt63aKoCWqncyWFxeir/F03d/483X2sj0IrkTo5CmVd5//bdgFYrd3JoVUrd/qv1HFi1rNgPyEeqCOPNkyrFtX9LYkjV0j9bdFVLjWlk+V3795Xy/g5PCVn11oUuTBqdY91Vq5R5NxK3QLiLahDXbf6CuLEX6slZrQxVKR1WLV+RXMlhoI9OOm9eV7X0sdeyUrmSY6vMex8oWynzpvZaHJpLAH+gScb6OP19nH5p5/enGrSIA+KHruVM8eiVfUS4aikiY/ttnj1ocQanO+9+ZJkK8Q3GAtOvrbAtM0OOasUq896PLFMp86ZWLUOYHDPkGOfQdqqc0t8gjbRb3oKX2FdjbnIY6GeODdKP2rkDYpTZ3GrFIq8taDXmJkfudsI52h000ZxqRaoB681zx+k3xJPu52slZg1a3Jzk0KqAGmkXt/zk6OLWuIyXOHTvcIHte4f5F7dCA2J9BaaPc4xVUw7xF+6+lekdIs1pc7zyXjukZ2ToWotFOq0LXB2nh3bi9ZtEU5NDOx3XmKYKxE9VQ08Q004cEEs0Jzl8Y6OiIdpl/BukkxhvQdlMTQ6/Eekw/cyRs2qpjtPv4B1fWUx94s0o8xym00ZUP7eT9p5DeswuXp/By6NtByIiIiIiIqJvwbl+2ecaT9cyZKxB+tUO/KWdr0rO5LBo7huVf4euY9RohtorXNbBe73EOixBrsKa3mt5frnEhWzaFUi9dPyAy45Q+p9f4mVwWOCSvZDEkGdUCqQz7bK8lL5Sc+8+lzu5jDJf2hWf0LQx0Ja5UspKcn04Tr+CbZFvioFeXUjChNocZWCZEufHaiWxWpmjxLQNXkBvf5wbkyMxOeZUK0aZd4dxFZqbeawXSyY3suw1nveGpCrqnq6fy7bxN72YqVVd92BWF0c4pN947ce0eN42+wj9Jy5WowIm32C8Q7PB+pMZKG+hP8nfP/OMPX4ZOnN07R4t5h5xNm3Zx4F1lPVPaXwbNNt4LKYZieOwQLWyg76yue/V3CNP9ziUHB8w727t6/ZzY9dxj3FbDCdFSkyX+H2ysAjvoAJ5uqh7xG+g/udrCaolRxEZcxdYP4O0ndhNfyFsOyHeUII4LJAc4oDhFZYNJ0embFyLNEUgZo1mx5bt31qZgxJPS477NkbRTjLvIfA9/ITbDJSteuv4gPiEMwMxb9t4twMxrRLTYaHkMEg/ciRZiojY2gYolXI7xG0o//0qEM8EPtu/434P/axllJgl4hKuUsrdQz8Tlog7KBwWSg5hkFbnjm1IUSjlh75UqZS/9cpoSRqiJVzplXlI+D7A+E9xbpC2jcQB4weFw4LJ0ZENOiVJbpRYd0q5oTZM1/10van2yqQkm8FwctjEeN06Pg4so7U1ipGYFuMHhcMKkqNj0SSK7ODYKsd6Me5xegTNNbSzU8trZ5aYBvgB4e9VKjFNREznLXM38n50cpzjv9So0WSvHAk/obluIj8FKZfIXWCZvffa39D/YV20NsBHjPvkvTaBv8VnxA1y+Z97hUzOkRw+WfkKzSlSfh/0T6WMxcu4Opsy4hpbNnUUN9rU4XOD0/qwRtwwdonmyPNHNC3CR9+PWBdth2wwvqOuI+L048X4OSFmkqnJ0Q0X+/NqxJFyb5TlO1KN9L+0wbpoO0B2fI1h/o7sVzNyYNz0XnfXVGoMO1sVPLVaCT0Zn2vo3G9UdRsqRGvp1zifO2XefmQZC/334bW/O68xrMDpNr/DCkij098hHyKWC40s2l4ZC73Pv0mIV3jlcvZWxAFx3fKhdfST5R7jPbmOCcQ0XjmHBbqyBnq3VFbYBpaR+feBZXyHQLnrifFyJ4eF/v33eL6DLPSdqO2kIiKmJNo2IaaLKHMWO+hfRiYZ4zi0KyNnlIeBslsl9jXC4ySPGB5DKZR4uZND3GL4+4fek21hAp97yBzTYaHkECXCKxwz7QZiFxPilYFY50gOUSFt/WQHj4323ifGfEA42RwWTA5RIH3oXMrbiNgmMrZs9O1AnHMlBxB/gNSI73ndZorpMDE5cj7UZPA0dB4apZMejnTfSqT3Jgo0O/8Vnt8mKPGkhV5huI9fea/vMNyyTy1v2nW0eP5Li9K1rNt4NdIYPN3ucOXF7NanHokhSdZvyNeIfJgrZ3L0dfdSbnD6OCQRERERERERERERERERERERERERERERERERERERERERERERERERERERncX/Z96oxRsCt/4AAAAASUVORK5CYII=&logoColor=white&link=https://altschoolafrica.com/schools/engineering)](https://altschoolafrica.com/schools/engineering)



<!-- PROJECT LOGO -->
<br />
<div align="center">

  <p align="center">
    <br />
    <a href="https://github.com/wendeee/socialmediaAPI#readme"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://linkup.cyclic.app">View Demo</a>
  </p>
</div>

# Technologies used

<div align="center">

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens)

</div>

---
<!-- Project Requirements -->

# Requirements

<details>

<summary>The following are the requirements I implemented in this project 👇:</summary>

- [x] Users should be able to sign up(register) and sign in into their account

- [x] Users should be able to follow and unfollow other users on the platform

- [x] Users should be able to get all followers and followings

- [x] Users should be able to delete their account

- [x] For the Post functionality, users should be able to:
    - [x] Share a post
    - [x] Like and unlike a post
    - [x] Upload image to a post
    - [x] Comment on a post
    - [x] Like a comment to a post
    - [x] Repost a shared post
    - [x] Edit and update a post
    - [x] Get timeline posts
    - [x] Delete a post

- [x] A post is initally in a draft state when created. To share a post, user should update the state to 'shared'

---

</details>

<br>

# Development

## Prerequisites

- [Node.js](https://nodejs.org/en/download/)
- [MongoDB](https://www.mongodb.com/docs/manual/installation/)

### Clone this repo
```sh
 git clone https://github.com/wendeee/socialmediaAPI.git
  ```

### Install project dependencies

```sh
npm install
```

### Update .env with [example.env](https://github.com/wendeee/socialMediaAPI/blob/main/example.env)

* Sign up on Cloudinary to get API_KEY for free and other details needed in your .env file
* To implement forgot password and reset password functionality, I used Nodemailer and mail trap to send reset token to user's email.<br>
Sign up on [mailtrap](https://mailtrap.io/) for free to get the following details👇:
    - EMAIL_USERNAME
    - EMAIL_PASSWORD
    - EMAIL_HOST
    - EMAIL_PORT

### Run development server

```sh
npm run start:dev
```

## Models

---

## User
| field         |  data_type   | constraints      |
|---------------|--------------|------------------|
|  firstname    | string       |  required        |
|  lastname     | string       |  required        |
|  username     | string       |  required        |
|  email        | string       |  required        |
|  password     | string       |  required        |
|passwordConfirm| string       | required         |
|  followers    | objectId     | referenced       |
|  followings   | objectId     | referenced       |
|  posts        | objectId     | referenced       |
|  joinedOn     | Date         | added dynamically|


## Post
| field  |  data_type | constraints  |
|---|---|---|
|  post | string  |  required|
|  author  |  objectId |  referenced |
| state   |  string  | required, enum: ['draft', 'shared'] |
|  image     | string  |  optional |
|  likes |   Number |  added dynamically  |
| numOfRepost | Number | added dynamically |
| comments  | objectId | referenced|
| timestamps | Date | required |

## RePost
| field  |  data_type | constraints  |
|---|---|---|
| _user | objectId  |  referenced |
| _post |  objectId |  referenced |
| timestamps | Date | required |

## likePost
| field  |  data_type | constraints  |
|---|---|---|
| _user | objectId  |  referenced |
| _post |  objectId |  referenced |
| timestamps | Date | required |

## Comment
| field  |  data_type | constraints  |
|---|---|---|
| _user | objectId  |  referenced |
| _post |  objectId |  referenced |
| comment | string | required |
| likes | Number | dynamically added |
| timestamps | Date | required |

## likeComment
| field  |  data_type | constraints  |
|---|---|---|
| _user | objectId  |  referenced |
| _comment |  objectId |  referenced |
| timestamps | Date | required |


## API Endpoints

### Base URL

- https://linkup.cyclic.app

### USERS

### Register/Sign up a user

- Route:  /api/auth/signup
- method: POST

- 👇: Body

```json
{
   "firstname":"Jackson",
    "lastname":"Ben",
    "username":"jacksonben",
    "email": "jackson@gmail.com",
    "password": "jackson12345",
    "passwordConfirm": "jackson12345"
}
```
 👇: Response

```json

{
    "status": "success",
    "token": {token},
    "data": {
        "user": {
            "firstname": "Jackson",
            "lastname": "Ben",
            "username": "jacksonben",
            "email": "jackson@gmail.com",
            "followers": [],
            "followings": [],
            "joinedOn": "2022-12-09T22:05:06.564Z",
            "posts": [],
            "_id": "6393b13a97e46808bb9c9a3e",
            "createdAt": "2022-12-09T22:05:46.826Z",
            "updatedAt": "2022-12-09T22:05:46.826Z",
            "__v": 0
        }
    }
}
```
#### Login/Sign in a user

Route:  /api/auth/login
method: POST

 👇: Body

```json
{
    "email": "jackson@gmail.com",
    "password": "jackson12345"
}
```

 👇: Response

```json

{
    "status": "success",
    "token": {token}
}
```

#### Forgot Password
- Route: /api/auth/forgotPassword
- Method: POST

👇: Body
```json
{
    "email": "jackson@gmail.com"
}
```
👇: Response

```json
{
    "status": "success",
    "message": "A reset token has been sent to your email"
}
```

#### Reset Password
- Route: /api/auth/resetPassword/:token
- Method: PATCH

👇: Body
```json
{
    "password": "jacksonnewpassword",
    "passwordConfirm": "jacksonnewpassword"
}
```
👇: Response
```json
{
    "status": "success",
    "token": {token}
}
```

#### Follow a user
- Route: /api/v1/users/:toFollowId/follow
- Method: PATCH
- Header
  - Authorization: Bearer {token}

👇 :Response

```json
{
    "status": "success",
    "response": "following johndoe!"
}
```
#### unfollow a user
- Route: /api/v1/users/:toUnfollowId/unfollow
- Method: PATCH
- Header
  - Authorization: Bearer {token}

👇 :Response
```json
{
    "status": "success",
    "message": "johndoe unfollowed successfully!"
}
```

#### Get Followings
- Route: /api/v1/users/followings
- Method: GET
- Header
  - Authorization: Bearer {token}

👇 :Response
```json
{
    "numOfFollowings": 1,
    "followings": [
        {
            "firstname": "John",
            "lastname": "Doe"
        }
    ]
}
```
---
### POSTS

#### Create a Post
- Route: /api/v1/posts
- Method: POST
- Header
 - Authorization: Bearer {token}

 👇: Body

```json
{
    "post": "lorem iiiggg hhhaaa hhdddsn jkljskvhl vzbvzklvjhzv vn zhbvlVz n"
}
```
 👇: Response
```json
{
    "success": true,
    "data": {
        "author": "6393b13a97e46808bb9c9a3e",
        "post": "lorem iiiggg hhhaaa hhdddsn jkljskvhl vzbvzklvjhzv vn zhbvlVz n",
        "state": "draft",
        "image": "",
        "likes": 0,
        "numOfReposts": 0,
        "comments": [],
        "_id": "6393b41597e46808bb9c9a42",
        "createdAt": "2022-12-09T22:17:57.764Z",
        "updatedAt": "2022-12-09T22:17:57.764Z",
        "__v": 0
    }
}

//A post with an uploaded image
{
    "success": true,
    "data": {
        "author": "63910022e9cd10c8589fdda9",
        "post": "A post with an image",
        "state": "draft",
        "image": "https://res.cloudinary.com/dwsbmjhzd/image/upload/v1670604617/wgqddvyzvbd73nnuovvc.jpg",
        "likes": 0,
        "numOfReposts": 0,
        "comments": [],
        "_id": "6393e519d3208257faba9a44",
        "createdAt": "2022-12-10T01:47:06.016Z",
        "updatedAt": "2022-12-10T01:47:06.016Z",
        "__v": 0
    }
}
```

#### Update a Post
- Route: /api/v1/posts/:postId
- Method: PUT
- Header
 - Authorization: Bearer {token}

 👇: Body
 ```json
{
    "state": "shared"
}
 ```
👇: Response
```json
{
    "status": "success",
    "data": {
        "_id": "6393b41597e46808bb9c9a42",
        "author": "6393b13a97e46808bb9c9a3e",
        "post": "lorem iiiggg hhhaaa hhdddsn jkljskvhl vzbvzklvjhzv vn zhbvlVz n",
        "state": "shared",
        "image": "",
        "likes": 0,
        "numOfReposts": 0,
        "comments": [],
        "createdAt": "2022-12-09T22:17:57.764Z",
        "updatedAt": "2022-12-09T22:30:17.243Z",
        "__v": 0
    }
}
```

#### Edit a Post
- Route: /api/v1/posts/:postId
- Method: PATCH
- Header
 - Authorization: Bearer {token}

👇: Body
```json
{
    "post": "Lorem ipsum updated"
}
```

👇: Response
```json
{
    "status": "success",
    "data": {
        "_id": "6393c921fe99aa758d819ac1",
        "author": "6393c1bcfe99aa758d819aa4",
        "post": "Lorem ipsum updated",
        "state": "shared",
        "image": "",
        "likes": 0,
        "numOfReposts": 0,
        "comments": [],
        "createdAt": "2022-12-09T23:47:45.581Z",
        "updatedAt": "2022-12-09T23:50:08.612Z",
        "__v": 0
    }
}
```

#### Like a Post
- Route: /api/v1/posts/:postId/like
- Method: PATCH
- Header
 - Authorization: Bearer {token}

👇: Response
```json
{
    "status": "success",
    "message": "You liked this post",
    "post": {
        "_id": "6393b41597e46808bb9c9a42",
        "author": "6393b13a97e46808bb9c9a3e",
        "post": "lorem iiiggg hhhaaa hhdddsn jkljskvhl vzbvzklvjhzv vn zhbvlVz n",
        "state": "shared",
        "image": "",
        "likes": 1,
        "numOfReposts": 0,
        "comments": [],
        "createdAt": "2022-12-09T22:17:57.764Z",
        "updatedAt": "2022-12-09T22:30:17.243Z",
        "__v": 0
    }
}
```
#### Unlike a Post
- Route: /api/v1/posts/:postId/like
- Method: PATCH
- Header
 - Authorization: Bearer {token}

👇: Response
```json
{
    "message": "You unliked this post",
    "postToLike": {
        "_id": "6393b41597e46808bb9c9a42",
        "author": "6393b13a97e46808bb9c9a3e",
        "post": "lorem iiiggg hhhaaa hhdddsn jkljskvhl vzbvzklvjhzv vn zhbvlVz n",
        "state": "shared",
        "image": "",
        "likes": 0,
        "numOfReposts": 1,
        "comments": [],
        "createdAt": "2022-12-09T22:17:57.764Z",
        "updatedAt": "2022-12-09T22:39:16.038Z",
        "__v": 0
    }
}
```

#### Repost a Post
- Route: /api/v1/posts/:postId/repost
- Method: POST
- Header
 - Authorization: Bearer {token}

👇: Response
```json
{
    "status": "success",
    "message": "You reposted this post",
    "post": {
        "_id": "6393b41597e46808bb9c9a42",
        "author": "6393b13a97e46808bb9c9a3e",
        "post": "lorem iiiggg hhhaaa hhdddsn jkljskvhl vzbvzklvjhzv vn zhbvlVz n",
        "state": "shared",
        "image": "",
        "likes": 0,
        "numOfReposts": 1,
        "comments": [],
        "createdAt": "2022-12-09T22:17:57.764Z",
        "updatedAt": "2022-12-09T22:39:16.038Z",
        "__v": 0
    }
}
```

#### Comment on a Post
- Route: /api/v1/posts/:postId/comment
- Method: POST
- Header
 - Authorization: Bearer {token}

👇: Body
```json
{
    "comment": "Great write up!"
}
```
👇: Response
```json
{
    "status": "success",
    "message": "You commented on this post",
    "data": {
        "comment": {
            "_user": "6393b13a97e46808bb9c9a3e",
            "comment": "Great write up!",
            "_post": "6393b41597e46808bb9c9a42",
            "likes": 0,
            "_id": "6393ba5197e46808bb9c9a61",
            "createdAt": "2022-12-09T22:44:33.937Z",
            "updatedAt": "2022-12-09T22:44:33.937Z",
            "__v": 0
        }
    }
}
```
#### Like a comment to a Post
- Route: /api/v1/posts/:postId/:commentId/like
- Method: PATCH
- Header
 - Authorization: Bearer {token}

👇: Response
```json
{
    "status": "success",
    "message": "You liked this comment",
    "data": {
        "comment": {
            "_id": "6393ba5197e46808bb9c9a61",
            "_user": "6393b13a97e46808bb9c9a3e",
            "comment": "Great write up!",
            "_post": "6393b41597e46808bb9c9a42",
            "likes": 1,
            "createdAt": "2022-12-09T22:44:33.937Z",
            "updatedAt": "2022-12-09T22:44:33.937Z",
            "__v": 0
        }
    }
}
```
#### Delete a Post
- Route: /api/v1/posts/:postId/
- Method: DELETE
- Header
 - Authorization: Bearer {token}

👇: Response
```json
{
    "status": "success",
    "message": "post deleted sucessfully"
}
```
---

## Lessons I learned while working on this: 

- How to model data
- User authentication authorization with JWT
- Database Query
- User Authentication
- How to craft a presentable README.md
- How to upload image using multer and cloudinary

<!-- CONTACT -->
## Contact

- Twitter - [@_ChinwenduE](https://twitter.com/_ChinwenduE) 

- Email - chinwe.promise2016@gmail.com

Project Link: [https://github.com/wendeee/socialmediaAPI](https://github.com/wendeee/socialmediaAPI)

<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

- [AltSchool Africa School of Engineering](https://altschoolafrica.com/schools/engineering)
- [Othneil Drew's README Template](https://github.com/othneildrew/Best-README-Template)
- [Ileriayo's Markdown Badges](https://github.com/Ileriayo/markdown-badges)
- [Oluwatobi's Blogolicious README](https://github.com/tobisupreme/blogolicious/blob/main/README.md)


<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/wendeee/socialmediaAPI.svg?style=for-the-badge
[contributors-url]: https://github.com/wendeee/socialmediaAPI/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/wendeee/socialmediaAPI.svg?style=for-the-badge
[forks-url]: https://github.com/wendeee/socialmediaAPI/network/members
[stars-shield]: https://img.shields.io/github/stars/wendeee/socialmediaAPI.svg?style=for-the-badge
[stars-url]: https://github.com/wendeee/socialmediaAPI/stargazers
[issues-shield]: https://img.shields.io/github/issues/wendeee/socialmediaAPI.svg?style=for-the-badge
[issues-url]: https://github.com/wendeee/socialmediaAPI/issues
[license-shield]: https://img.shields.io/github/license/wendeee/socialmediaAPI.svg?style=for-the-badge
[license-url]: https://github.com/wendeee/socialmediaAPI/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/enyinna-chinwendu-promise
[product-screenshot]: images/screenshot.png
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/
[Angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[Angular-url]: https://angular.io/
[Svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[Svelte-url]: https://svelte.dev/
[Laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[Laravel-url]: https://laravel.com
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[JQuery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[JQuery-url]: https://jquery.com 
[twitter-url]: https://twitter.com/_ChinwenduE