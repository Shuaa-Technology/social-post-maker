# Customization

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
   ```
