# Activity 2 - Create a Cat Card

Let's create a reusable component, an all-seeing, all-powerful cat card, that looks different depending on what data we feed it! 👁 🐈

Can you remember how to create a component?

Try to think about how you would approach this. Recalling and planning will be useful for learning even if the plan you form in your mind isn't perfect.

Then read on, to find out how...

## Step 1

- In the `components` folder create a file/component called `cat_card.tsx`

- Add this code to `cat_card.tsx`:

```JavaScript
const CatCard : React.FC = () =>
        <div className="card">
        </div>;

export default CatCard;
```

- Save your file

## Step 2

- At the top of `App.tsx` import your cat card

<details>
<summary>Click here to see the answer</summary>
<pre>

`import CatCard from './components/cat_card'`

</pre>
</details>

Component created and ready to go!

Time to see [Activity 3](./activity_3.md) 😸
