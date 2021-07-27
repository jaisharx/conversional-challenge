# Getting started
After getting a local copy of the repo, you need to run the following commands 👇

```
yarn
&
yarn dev
```

# Additional Requirements

In order to allow the ```ButtonComponent``` & ```LinkComponent``` to be able to open the modal, we can have a prop like doesOpenModal supported by them. Inside the components, we can check if the prop is passed, and set the modal ```isOpen``` state based on that.

I've added an additonal ```Example3``` that does exactly what is explained above.