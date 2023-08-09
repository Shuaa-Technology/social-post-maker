# Social Post Maker

Social Post Maker is a simple and intuitive social media post builder built with React. With a variety of templates and customization options, users can quickly create engaging and professional social media posts. It's perfect for bloggers, social media managers, and anyone who needs to create custom social media posts quickly and easily.

## Demo

https://social-craft.netlify.app

## Getting Started

To get started with Social Post Maker, simply clone this repository and run `npm install` to install the required dependencies. Then run `npm start` to start the development server.

git clone https://github.com/Shuaa-Technology/social-post-maker.git <br/>
cd social-post-maker <br/>
npm install <br/>
to run the app: npm start <br/> 
to run the dev server(in another terminal): json-server --watch api.json <br/>


Once the development server is running, you can access Social Post Maker at `http://localhost:3000`.

## Customizing Colors in the Application

The application allows you to customize the color scheme by overriding specific colors. The color scheme is defined in the `$color-scheme` map. To override colors, follow these steps:

1. Create a new SCSS file or open an existing one to define your custom color overrides. Let's assume the file is named `_custom-variables.scss`.

2. In the `_custom-variables.scss` file, define the `$color-overrides` map with your desired color values. Example:

   ```scss
   $color-overrides: (
     dark: (
       primary: #0074d9, // Custom primary color for dark mode
       // Add more color overrides for dark mode if needed
     ),
     light: (
       primary: #00ff00, // Custom primary color for light mode
       // Add more color overrides for light mode if needed
     )
   );
3. Import the _custom-variables.scss file in your App.module.scss file. Example:
   ```scss
    /* Import your custom color overrides */
    @import './path/to/_custom-variables';
    
    /* Import the main variables file */
    @import 'variables';
   ```
   
   By importing your custom variables before the main variables.scss file, they will override the corresponding colors in the default $color-scheme map.
### Example

Here's an example of how to override the primary color for dark mode in the `_custom-variables.scss` file:

    ```scss
    $color-overrides: (
      dark: (
        primary: #0074d9, // Custom primary color for dark mode
      ),
    );


## Usage

To use Social Post Maker, simply choose a template and customize the content and layout of your social media post. You can then export the code for use on social media platforms.

## Contributing

If you'd like to contribute to Social Post Maker, please fork this repository and submit a pull request with your changes. We welcome contributions from the community!

## License

Social Post Maker is open-source software licensed under the [MIT license](https://opensource.org/licenses/MIT).
