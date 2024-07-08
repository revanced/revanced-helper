# 🏃🏻‍♂️ Running and deploying

There are two methods to run the bot. Choose one that suits best for the situation.

## 👷🏻 Development mode (recommended)

There will be no compilation step, and Bun will automatically watch changes and restart the bot for you.

You can quickly start the bot by running:

```sh
bun dev
```

## 📦 Building

To build the bot, you can run:

```sh
bun run build
```

The distribution files will be placed inside the `dist` directory. Inside will include:

-   The default configuration for the bot
-   An empty database for the bot with schemas configured
-   Compiled source files of the bot

## ✈️ Deploying

To deploy the bot, you'll need to:

1. Replace the `config.ts` file with your own configuration _(optional)_
2. [Build the bot as seen in the previous step](#-building)
3. Run the `reload-slash-commands` script
   This is to ensure all commands are registered, so they can be used.  
   **It may take up to 2 hours until **global** commands are updated. This is a Discord limitation.**

    ```sh
    # Assuming you're in the workspace's root (NOT REPOSITORY ROOT)
    bun run scripts/reload-slash-commands.ts
    ```

4. Copy contents of the `dist` directory

    ```sh
    # For instance, we'll copy them both to /usr/src/discord-bot
    # Assuming you're in the workspace's root (NOT REPOSITORY ROOT)
    cp -R ./dist/* /usr/src/discord-bot
    ```

5. Replace the default empty database with your own _(optional)_

6. Configure environment variables  
   As seen in [`.env.example`](../.env.example). You can also optionally use a `.env` file which **Bun will automatically load**.

7. Finally, run the bot

    ```sh
    cd /usr/src/discord-bot
    bun run src/index.js
    ```

## ⏭️ What's next

The next page will tell you how to add commands and listen to events to the bot.

Continue: [✨ Adding commands and listening to events](./4_commands_and_events.md)