# Curatool

demo_link

Curatool is a web application that act as a CMS upon Fluxonaut custom 
Window/Layout data a.k.a "CURATED WINDOWS".  


## Features

Graphic interface to manage(create,update,delete) all metadata used to build a "Curated Window", 


1) Window
2) Layouts
3) Categories
4) Tags


## Architecture 

Todo...

## Built With (Dependencies)

- [ReactJS](https://reactjs.org/) version: 17
- [NextJS](https://nextjs.org/) version: 10.0.5
- [Next-iron-session](https://next-iron-session.now.sh/) version: 4.1
- [Material-UI](https://next.material-ui.com/) version: 5.0.0-alpha.24
- [Typescript](https://www.typescriptlang.org/) version: 4.2
- [Storybook](https://storybook.js.org/) version: 6.1
- [Redux](https://redux.js.org/) version: 4.0.5
- [SWR](https://swr.vercel.app/) version: 0.5 

## Local development setup

Assuming you're on OS X & Linux, clone the repository:

```sh
git clone https://github.com/citrusys/curatool
```

Install JS dependencies:

```sh
cd curatool && yarn install
```

Then, run the next development local server:

```sh
yarn dev
```

and then access http://localhost:300


## Production Build

```sh
yarn build
```

And then serve it with next production local server

```sh
yarn start
```

and then access http://localhost:300

## Testing 

We're using storybook to aid development and testing

```sh
yarn storybook
```

## Deploy

Todo

## Release History

Todo

## Contributing

1. Clone the repository
2. Create your feature branch
3. Write your code
4. Test your code
5. Commit your changes
6. Push to the remote branch
7. Open a new Pull Request
8. Write what your Pull Request wants to achieve and what you are adding/changing
9. Wait for your Code Review approval and then correct/merge your branch.

## Authors

- **Lucas Lucafo**
- **Pedro Puzzi**
- **Humberto Julião**
