# assesment

This template should help get you started developing with Vue 3 in Vite.

## Hot to navigate submision

1. You can see the state store in src/store/index. It is where I set my acctive account, to get information in other components like --->
2. src/components/paymentDetails, here I get the account clicked in the component billingFeed, from my store and display the balance, next invoice date and the infographic that encourages the user to switch to Direct payment. When payment method is Direct payment it will display "Allready on Direct Payment" BillingFeed is in a sense the heart component as it is responsible for loading in the account data and commiting to the store.
3. BillingHistory is the the table. i had problems setting up the table and table pagination using Vuejs. Originally I planned out that I would use Bootstrap vue but when I started building this component I learned that Boostrap-vue doesn't support Vue3 yet. This was honestly one of the first major blunders. I ended up not suceeding in building a competent component.

## Lesson I took away from this.

1.I learned a Vuejs which I see as a major plus and in the comming weeks I will be learning more about it's view model and best practices on building components. I have already started redesigning my JS slot game and I plan to rebuild it using VueJs and NodeJs.

2. I learned that my responsive CSS can use a bit of a refresher and in the end I failed making the web page 100% responsive. which should always be the main objective when building web apps.

3. I learned, well not leanred but observed a bug in the code. where the class "active" gets assigned to all the cards in BillingHistory. In hindsight I should have seen that comming given that the mapping uses one class card as the template. So I will try and learn from this going into my Slot machine webapp.

4. I learned that when learning new frameworks, the best way to start is to read through documentation and start building a small app to just test your new found skillset. I did this when learning VueX and if I did this previously I would have safed so much hair from turning grey when I first learned other librabries like Jest and Redux.


## Conclusion.

Even though I personaly think I failed this assesment and fell flat on my face. I did get a lot out of it. I saw where I can imporve and also how I can move forward with learning VueJs. I was previosuly hesitant to learn a new framework after I learned ReactJs but I now see that even though they are not apples to apples but learning a new framework doesn't take that much away from your previous gained knowledge. 

This was honestly very fun and very much needed to check my progression as a developer. Even though I still have much to learn, I believe that in no time I can still follow through with my goal of becomming a full time developer in the first half of 2022.

Thanks to bOnline for giving me this oppurtunity and for opening my eyes to the obstacles that still lay in my path.



## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```
