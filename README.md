# TalkFin

Full stack financial and networking app for investors. TalkFin users can look up stock market data, create posts to discuss investments, ideas, trading tips and platforms, or any finance related topics. Users can search for any stock symbol of their choice and receive its respective trading chart, as well as financial data such as P/E Ratio, Dividend Yield, Profit Margin, and more. This app was built taking the DevConnector app by Brad Traversy as foundation.

## Images

> #### Homepage

![homepage](https://user-images.githubusercontent.com/75185644/128807725-410fb91d-1139-4330-abbf-6cee8e131e69.PNG)

> #### Search Page

![search](https://user-images.githubusercontent.com/75185644/128807737-8381ff83-3d9f-45f5-91b8-5fac33a8db80.PNG)

> #### Stock Data Page

![data1a](https://user-images.githubusercontent.com/75185644/128807756-b2bf9707-0be6-4173-afd3-83f593d8d9f7.PNG)

> #### Stock Data Page Continued

![data2a](https://user-images.githubusercontent.com/75185644/128807800-92e4e33a-daea-40e8-b413-cf0e8f898857.PNG)

> #### Posts Page

![posts](https://user-images.githubusercontent.com/75185644/128808258-304c9537-093e-406b-8685-94d4dfedd305.PNG)

> #### Dashboard

![dashboard](https://user-images.githubusercontent.com/75185644/128807869-68b29a22-3b0c-4283-a084-0644a4952d0a.PNG)

> #### Profiles Page

![profiles](https://user-images.githubusercontent.com/75185644/128807898-b18dfb08-6dc9-46f7-867e-d3ab2eb1e585.PNG)

> #### Profile Page

![profile1](https://user-images.githubusercontent.com/75185644/128807930-45b58a07-6dc9-4d9d-8ce1-ab3e343d22fb.PNG)

> #### Profile Page Continued

![profile2](https://user-images.githubusercontent.com/75185644/128807971-3cb6c8be-ca77-4e65-a036-69d7f70e39c4.PNG)

> #### Sign Up Page

![sign-up](https://user-images.githubusercontent.com/75185644/128808063-56cc98fa-9c65-45aa-8165-5c4dbd4e2848.PNG)

> #### Profile Edit Page

![profile-edit](https://user-images.githubusercontent.com/75185644/128808161-14367686-09dd-40f2-b93b-fb51eef9293b.PNG)

> #### Add Platform Page

![platform](https://user-images.githubusercontent.com/75185644/128808141-6ed2f4b3-864e-4a15-80f0-ae652d7c224a.PNG)

> #### Add Education Page

![education](https://user-images.githubusercontent.com/75185644/128808148-ad0af8ae-1028-4c2b-9ced-de07147f3230.PNG)

## Functionalities

- Users who are not athenticated have access to the registration and login routes. They also have access to the profiles and profile routes, where they can view other investors profiles while logged out.

- Authenticated users land on the search page where they can look up any stock ticker or company. Searches query the Alpha Vantage API and clicking on any of the search results will take users to that company's route where they can view its financial data and daily time frame chart. The chart is displayed using Plotly and displays daily price variations for the last 100 days, as well as the percentage price variance between the last two days.

- While logged in, users will also be able to access the posts and post routes. In the posts route, users will be able to create a new post and like or dislike any of the posts. They can also delete their own posts from this route or join the discussion within any of the posts, which will take them to that post's route. From the post route users also have the ability to comment or delete their own comments.

- Logged in users can also access the dashboard route where they will be able to edit their profile, add their investing/trading platforms, and add their educational background. From within the dashboard, users will also be able to delete any platforms or education credentials that they've added, as well as the option to delete their acccount.

## Limitations

- If using the free Alpha Vantage API Key, search queries must to be limited to 1 per minute or the data might not display correctly.

## Technologies Used

### Frontend & Backend

- React
- Redux
- Javascript
- Express
- Node
- MongoDB
- Mongoose
- Nodemon
- HTML5
- CSS3
- JSON Web Token
- bcrypt
- Gravatar
- Plotly

## Getting Started

This app contains secret keys which have been hidden in a .json configuration file for security purposes, so the app cannot be run with all of its features on your local machine without these variables. However, feel free to clone this repository, then create a .json configuration file within a config folder and add values to the following variables:

```
{
    "mongoURI": "",
    "jwtSecret": "",
    "alphaVantageKey1": "",
    "alphaVantageKey2": "",
    "alphaVantageKey3": ""
}
```

### Clone or download this repository

```sh
git clone https://github.com/dev382/TalkFin.git
```

### Install dependencies

In the directory of the folder named TalkFin, which contains the files of the repositiory, run the following command from your terminal:

```sh
npm install
```

or

```sh
yarn install
```

### Run the app from your terminal

Once installation is complete, run the following command from your terminal:

```sh
npm run dev
```

### Launch the app from your web browser

Your app should launch automatically. If it does not open automatically, open your web browser and navigate to:

```sh
localhost:3000
```

The app should now be running.
