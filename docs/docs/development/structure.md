# Project Structure

```bash
    |   App.module.scss
    |   App.test.tsx
    |   App.tsx
    |   index.scss
    |   index.tsx
    |   logo.svg
    |   react-app-env.d.ts
    |   reportWebVitals.ts
    |   setupTests.ts
    |   tree.txt
    |
    +---app
    |   |   hooks.ts
    |   |   store.ts
    |   |
    |   \---store
    |           ConfigStore.ts
    |           TemplatesStore.ts
    |
    +---components
    |   +---Configuration
    |   |   |   Configuration.module.scss
    |   |   |   Configuration.tsx
    |   |   |
    |   |   +---Appearance
    |   |   |       Appearance.module.scss
    |   |   |       Appearance.tsx
    |   |   |
    |   |   \---Inputs
    |   |       \---ThemeModeInput
    |   |               ThemeMode.module.scss
    |   |               ThemeMode.tsx
    |   |
    |   +---Editor
    |   |   \---Default
    |   |       +---Preview
    |   |       |       Rendrer.module.scss
    |   |       |       Rendrer.tsx
    |   |       |
    |   |       \---Settings
    |   |           +---TypesFormFieldGroups
    |   |           |       AccordionFieldGroup.module.scss
    |   |           |       AccordionFieldGroup.tsx
    |   |           |       CommonStyles.module.scss
    |   |           |
    |   |           \---TypesFormFields
    |   |                   ColorFormField.module.scss
    |   |                   ColorFormField.tsx
    |   |                   CommonStyles.module.scss
    |   |                   ImageFormField.module.scss
    |   |                   ImageFormField.tsx
    |   |                   NumberFormField.module.scss
    |   |                   NumberFormField.tsx
    |   |                   TextFormField.module.scss
    |   |                   TextFormField.tsx
    |   |
    |   +---Preview
    |   |       Preview.module.scss
    |   |       Preview.tsx
    |   |
    |   +---Settings
    |   |   |   Settings.module.scss
    |   |   |   Settings.tsx
    |   |   |
    |   |   +---TypesFormFields
    |   |   |       TypeFormField.tsx
    |   |   |
    |   |   \---TypesFormFieldsGroups
    |   |           TypesFormFieldsGroup.module.scss
    |   |           TypesFormFieldsGroup.tsx
    |   |
    |   +---Shared
    |   |       Loader.module.scss
    |   |       Loader.tsx
    |   |
    |   \---TemplateList
    |       |   TemplateList.module.scss
    |       |   TemplateList.tsx
    |       |
    |       \---TemplateThumbnail
    |               TemplateThumbnail.module.scss
    |               TemplateThumbnail.tsx
    |
    +---config
    |       api.ts
    |       render.ts
    |       templates.ts
    |
    +---core
    |   |   API.ts
    |   |   Configuration.ts
    |   |   TemplateRenderer.ts
    |   |
    |   +---Models
    |   |   +---Configuration
    |   |   |   \---Appearance
    |   |   |           ThemeMode.ts
    |   |   |           ThemeModeInterface.ts
    |   |   |
    |   |   \---Template
    |   |       |   Template.ts
    |   |       |   TemplateInterface.ts
    |   |       |
    |   |       \---Settings
    |   |           |   TemplateSettings.ts
    |   |           |   TemplateSettingsGroup.ts
    |   |           |   TemplateSettingsInterface.ts
    |   |           |
    |   |           \---Types
    |   |               |   FieldSettingsType.ts
    |   |               |   GroupSettingsType.ts
    |   |               |   SettingsType.ts
    |   |               |   SettingsTypeInterface.ts
    |   |               |
    |   |               +---Field
    |   |               |       ColorType.ts
    |   |               |       ImageType.ts
    |   |               |       NumberType.ts
    |   |               |       TextType.ts
    |   |               |
    |   |               \---Group
    |   |                       GroupType.ts
    |   |
    |   \---Services
    |           TemplatesService.ts
    |           TemplatesServiceInterface.ts
    |
    +---pages
    |   \---Editor
    |       |   EditorPage.module.scss
    |       |   EditorPage.tsx
    |       |
    |       \---Layouts
    |           +---Artboard
    |           |       Artboard.module.scss
    |           |       Artboard.tsx
    |           |
    |           \---Sidebar
    |                   SideBar.module.scss
    |                   Sidebar.tsx
    |
    \---styles
        |   mixins.scss
        |   _variables.scss
        |
        \---themes
            |   theme-modes.scss
            |
            +---dark
            |       thumbnail.svg
            |       variables.module.scss
            |
            \---light
                    thumbnail.svg
                    variables.module.scss
```

