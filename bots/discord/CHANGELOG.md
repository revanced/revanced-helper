# @revanced/discord-bot [1.0.0-dev.2](https://github.com/revanced/revanced-helper/compare/@revanced/discord-bot@1.0.0-dev.1...@revanced/discord-bot@1.0.0-dev.2) (2024-07-23)


### Features

* **bots/discord:** don't nest builds in src directory, autogen db when missing ([4834685](https://github.com/revanced/revanced-helper/commit/48346851864c4d4b6276388644dd24ce16222b3e))

# @revanced/discord-bot 1.0.0-dev.1 (2024-07-22)


### Bug Fixes

* **bots/discord/commands/mute:** use existing `parseDuration` util function' ([3e07429](https://github.com/revanced/revanced-helper/commit/3e07429664f7dbb6ce653083e0adb1a232737fde))
* **bots/discord/commands/unmute:** fix option description and embeds ([7fdf8c0](https://github.com/revanced/revanced-helper/commit/7fdf8c0dc722e21fe5a3ad6ef8d3a306ef85f532))
* **bots/discord/commands:** minor issues ([3b2596e](https://github.com/revanced/revanced-helper/commit/3b2596e748cf2cde1500ef2ded55f0faabc2c272))
* **bots/discord/commands:** refactor and add checks ([a2bf3ea](https://github.com/revanced/revanced-helper/commit/a2bf3eade99b46f9ffb55d45b8caf1bcf3d22a9b))
* **bots/discord/database:** fix schema for role presets ([4aa138a](https://github.com/revanced/revanced-helper/commit/4aa138a9af8db7093ef637470fcfdea1f5341236))
* **bots/discord/scripts:** unintentional escaping on windows ([09dc706](https://github.com/revanced/revanced-helper/commit/09dc70632da0597fdb26677acee3f6fccbb2b9b5))
* **bots/discord/utils/discord/embeds:** set thumbnail on moderation embeds ([b056291](https://github.com/revanced/revanced-helper/commit/b056291ad0f2e2eac5eec8aa71f15dbc769aa0f9))
* **bots/discord/utils/discord/rolePresets:** correct property access for presets ([4c6ad11](https://github.com/revanced/revanced-helper/commit/4c6ad11be30c1d6af97c4ae40fc62d05fa7bdd57))
* **bots/discord/utils/discord:** add `moderation` module related functions ([7e8270f](https://github.com/revanced/revanced-helper/commit/7e8270f7d260322e1950e058b221ab088bd595d0))
* **bots/discord/utils/duration:** fix empty string returning with duration is 0 ([83c314e](https://github.com/revanced/revanced-helper/commit/83c314ef5f721abc355272db0e4c182dcfe5d943))
* **bots/discord:** apply active role presets if members rejoin ([f50b26b](https://github.com/revanced/revanced-helper/commit/f50b26b82d66c88fd1dbb8c07d77c177c0e781df))
* **bots/discord:** check token before connecting to bot api ([f3e4408](https://github.com/revanced/revanced-helper/commit/f3e4408aa28fb6a9d21365af8c1bea3d07b481de))
* **bots/discord:** clear role presets after they expire ([faa81f4](https://github.com/revanced/revanced-helper/commit/faa81f4d887eaeae809651f5b68187d033a260f2))
* **bots/discord:** connect to discord API even if initial bot API connection fails ([6658b58](https://github.com/revanced/revanced-helper/commit/6658b582dbeba7e072a7a04c4efa255e7f634aef))
* **bots/discord:** do decancer after resetting nickname ([0303fe3](https://github.com/revanced/revanced-helper/commit/0303fe3e367c07e92f831365d5548ca5b03435b2))
* **bots/discord:** follow-up if reply is already sent when error ([f75060b](https://github.com/revanced/revanced-helper/commit/f75060bc9cda44902cf872def73c116a6df039d7))
* **bots/discord:** messed up file name for `unmute` command ([399dca7](https://github.com/revanced/revanced-helper/commit/399dca71538fe5c8831977694a97058254a17578))
* **bots/discord:** owners cannot bypass checks on some commands ([39cba97](https://github.com/revanced/revanced-helper/commit/39cba973418027ba6ed67e1ae5ab5c6458807562))
* **bots/discord:** remove auto-generated files ([fb8af00](https://github.com/revanced/revanced-helper/commit/fb8af008661bf37389e01cba19d64a8b4fc82139))
* **bots/discord:** remove usage of macros ([7f27c56](https://github.com/revanced/revanced-helper/commit/7f27c5607ceeeef56d67097e88f68caa1b8791b3))
* **bots/discord:** remove useless feature ([d830e48](https://github.com/revanced/revanced-helper/commit/d830e48bc2de7aa457eab3a5f96ae652a93178f9))
* **bots/discord:** use `APIEmbed` for response config ([35b9448](https://github.com/revanced/revanced-helper/commit/35b944800a3943c187d5b0e0d3e465ad7d2056fe))
* **bots/discord:** use env for initializing database ([af3759c](https://github.com/revanced/revanced-helper/commit/af3759caf428fada3b3f4a51852543d6fb280018))
* **bots/discord:** wrong command file path being imported ([fa0159c](https://github.com/revanced/revanced-helper/commit/fa0159c3a8dd4dad8778ccdb75b9e7c02ebbb64f))
* config file not being read ([474a8be](https://github.com/revanced/revanced-helper/commit/474a8be4af4eb2bae6e80a893439d846ad4f7503))
* **discord-bot:** also execute slash commands ([f0d45b2](https://github.com/revanced/revanced-helper/commit/f0d45b2c926ed753e2d21f2e06e24d7e6c43880a))
* **discord-bot:** check for role position ([d332043](https://github.com/revanced/revanced-helper/commit/d332043b1a4bb7ac9698a2fc912832e184130b4b))
* **discord-bot:** check if the member has the role ([9bff68c](https://github.com/revanced/revanced-helper/commit/9bff68c8c40c692764e4dec15a058e35059efbc9))
* **discord-bot:** not executing slash commands ([aa08087](https://github.com/revanced/revanced-helper/commit/aa0808768b90844c5fbd3e75d9f2d01c723b0151))
* **discord-bot:** only send lowercased text ([7803758](https://github.com/revanced/revanced-helper/commit/78037580dc92883f5ca21157e45268850cb5db90))
* dislike button not working properly ([85eba55](https://github.com/revanced/revanced-helper/commit/85eba554247738066af72a8efd0de215ec1164dc))
* fix deprecation ([4373ede](https://github.com/revanced/revanced-helper/commit/4373ede855333f209676551162a525238656e1f8))
* fix the fiter for the interaction collector ([a9ff003](https://github.com/revanced/revanced-helper/commit/a9ff00394a73f68a6793c2b35ff184675ee5a72c))
* ignore message if there's no content ([3cbebc2](https://github.com/revanced/revanced-helper/commit/3cbebc284277808495e64cf0fb47c555924ad9c5))
* move modules to `/bots` ([cd7156e](https://github.com/revanced/revanced-helper/commit/cd7156e792e65777ad1ab5a6f5d828b9ef6a9754))
* trainAI not using the bin location ([bd29943](https://github.com/revanced/revanced-helper/commit/bd2994388bc65f720120ef49edb6ba8163260309))


### chore

* fix more build issues ([77fefb9](https://github.com/revanced/revanced-helper/commit/77fefb9bef286a22f40a4d76b79c64fcc5a2467f))


### Features

* add wit.ai support ([1909e2c](https://github.com/revanced/revanced-helper/commit/1909e2c42148d635dcd045c738d88f65c8be16e3))
* **bots/discord/commands/reply:** send stacktrace when failed ([9f1ac37](https://github.com/revanced/revanced-helper/commit/9f1ac379276c11da65235577a9c6717e01cb02eb))
* **bots/discord/commands:** add `ban` and `unban` commands ([dc4863d](https://github.com/revanced/revanced-helper/commit/dc4863dc208b3fede4d4def323306ab58daffe04))
* **bots/discord/commands:** add `eval` command ([e64d1da](https://github.com/revanced/revanced-helper/commit/e64d1da00cc2ba718da5a4b0da141fe86a0e48d2))
* **bots/discord/commands:** add `mute` and `unmute` commands ([c0fa2fe](https://github.com/revanced/revanced-helper/commit/c0fa2fe1c36acdc7c52cde277aa7da867065f55e))
* **bots/discord/commands:** add `purge` and `role-preset` commands ([fb01ce5](https://github.com/revanced/revanced-helper/commit/fb01ce57400130c93751a11573eb444c0ba103eb))
* **bots/discord/commands:** allow process exception in `exception-test` ([ca47535](https://github.com/revanced/revanced-helper/commit/ca475356ad95fec86e8e8b5bf4bbf17b70add5fe))
* **bots/discord/utils/discord/embeds:** expose `applyCommonEmbedStyles` fn ([2d794ed](https://github.com/revanced/revanced-helper/commit/2d794ede7d7a208bd3616c45e8e6d2a2cd83e9ed))
* **bots/discord/utils/embeds:** make title parameter nullable ([ee885ca](https://github.com/revanced/revanced-helper/commit/ee885ca7585a55fdc31e137ae29dc13a37ce2fb2))
* **bots/discord/utils/fs:** use `recursive` option for listing files ([da21e1a](https://github.com/revanced/revanced-helper/commit/da21e1a6f76deaeb477203b04263bd170863825b))
* **bots/discord/utils:** add duration utility ([a9add9e](https://github.com/revanced/revanced-helper/commit/a9add9ea9affb42bdfcb17cf4b268feec5729854))
* **bots/discord/utils:** add functions for role presets ([fb32a04](https://github.com/revanced/revanced-helper/commit/fb32a04ad38be8d0836dc99259b6ef05a0825830))
* **bots/discord/utils:** allow loading commands from custom dir ([8b690b8](https://github.com/revanced/revanced-helper/commit/8b690b879bb5c6023c8fc863afbd9fd1d02719bb))
* **bots/discord:** add `api.disconnectRetryInterval` config ([2f86586](https://github.com/revanced/revanced-helper/commit/2f8658617923c07f6847cbf1fdfc5f5379d95b6c))
* **bots/discord:** add `moderation.roles` config to be used in `moderation` commands ([39d5b3a](https://github.com/revanced/revanced-helper/commit/39d5b3a479b4d856aabe12cc31177c24f88ae23e))
* **bots/discord:** add `ocrTriggers` resp config, embed footer scan mode ([744a56a](https://github.com/revanced/revanced-helper/commit/744a56a4fdc8844e37959a88bcf81ee39fe726ef))
* **bots/discord:** add a better way to manage databases ([a68d726](https://github.com/revanced/revanced-helper/commit/a68d72687584332587455962b0202a306288057d))
* **bots/discord:** add more fallbacks for decancering ([2e1e009](https://github.com/revanced/revanced-helper/commit/2e1e009b4272495798313bd3bd61f258875c62e1))
* **bots/discord:** add source ([f9d50a0](https://github.com/revanced/revanced-helper/commit/f9d50a0a6bef8beaa428a0a555bfa4f879f685f1))
* **bots/discord:** improve logs ([6abb740](https://github.com/revanced/revanced-helper/commit/6abb7409945c10bd3af451fb45ef4b4d4ebe9489))
* **bots/discord:** sanitize `BasicDatabase` inputs ([fd76e0a](https://github.com/revanced/revanced-helper/commit/fd76e0af72fe28b414ae3b5e8d3886e58561e57e))
* **bots/discord:** support nickname decancering ([1723e8c](https://github.com/revanced/revanced-helper/commit/1723e8cacf96e8c6bdee22cfd30e89524fdcef74))
* **bots/discord:** switch to `drizzle-orm` ([e204b7b](https://github.com/revanced/revanced-helper/commit/e204b7b7566fd7fa423baef32977a8575d44a9e0))
* **bots/discord:** update config ([197d2ac](https://github.com/revanced/revanced-helper/commit/197d2acea89c38e43858d52736508d449152e804))
* discord bot scanning messages ([d1bd3b2](https://github.com/revanced/revanced-helper/commit/d1bd3b2b7e4985a64e9b070ab006cc6f3508c46e))
* **discord-bot:** a way to train AI ([355a508](https://github.com/revanced/revanced-helper/commit/355a50803adc85b5579155b55ddbba4fa0449237))
* **discord-bot:** command handler and train cmd ([6aee8a4](https://github.com/revanced/revanced-helper/commit/6aee8a4c63eb108800fcb0a23ca61f200d8f1f2a))
* **discord-bot:** event handler ([0ad5ece](https://github.com/revanced/revanced-helper/commit/0ad5ece08593c0db111fa4a592b42c6e0348fd1c))
* GODEL AI ([0ba525c](https://github.com/revanced/revanced-helper/commit/0ba525c4a5802106d582c75f713728accf2f151a))
* initalize discord bot ([bb4a5a7](https://github.com/revanced/revanced-helper/commit/bb4a5a77eefbc7ac88536f73a111df1050b235e7))
* initialize helper client ([7f9ca77](https://github.com/revanced/revanced-helper/commit/7f9ca77e0331ec143160ee51ed7c3aa9e4e70b9c))
* message buttons for training ([6551ca9](https://github.com/revanced/revanced-helper/commit/6551ca9dadc2e3ddfe98875e80ed61f7d71a1651))
* platform specific responses ([18e57b0](https://github.com/revanced/revanced-helper/commit/18e57b0c320732a937bb60db11c5d6794ed11522))
* prettier and eslint ([1c27ccb](https://github.com/revanced/revanced-helper/commit/1c27ccb17c85f0f6982db45de426181d2c231d0e))
* refactor and new features ([#7](https://github.com/revanced/revanced-helper/issues/7)) ([8b9f45d](https://github.com/revanced/revanced-helper/commit/8b9f45dc22de29dc2ccb1cfab9a026db00457e25))
* run bots in one process ([d26d533](https://github.com/revanced/revanced-helper/commit/d26d53317440c64fb775cea609a87d29be6c8b40))
* training and replies changed ([715aa91](https://github.com/revanced/revanced-helper/commit/715aa918cf84213c9b19591a398d7532eb3f232a))
* **utils/discord/embeds:** allow adding extra fields for moderation embeds ([49ce9a7](https://github.com/revanced/revanced-helper/commit/49ce9a7ca3d8558b73a9b94dfe7a01d809db6fff))


### BREAKING CHANGES

* In `@revanced/discord-bot`, its environment variable
                 `DATABASE_URL` has been renamed to `DATABASE_PATH`
                 and the `file:` prefix is no longer needed