export default {
    owners: ['USER_ID_HERE'],
    guilds: ['GUILD_ID_HERE'],
    messageScan: {
        filter: {
            channels: ['CHANNEL_ID_HERE'],
            roles: ['ROLE_ID_HERE'],
            users: ['USER_ID_HERE'],
            whitelist: false,
        },
        humanCorrections: {
            falsePositiveLabel: 'false_positive',
            allow: {
                members: {
                    permissions: 8n,
                    roles: ['ROLE_ID_HERE'],
                },
            },
        },
        allowedAttachmentMimeTypes: ['image/jpeg', 'image/png', 'image/webp'],
        responses: [
            {
                triggers: {
                    text: [/^regexp?$/, { label: 'label', threshold: 0.85 }],
                },
                response: {
                    title: 'Embed title',
                    description: 'Embed description',
                    fields: [
                        {
                            name: 'Field name',
                            value: 'Field value',
                        },
                    ],
                },
            },
        ],
    },
    logLevel: 'log',
    api: {
        websocketUrl: 'ws://127.0.0.1:3000',
    },
} satisfies Config as Config

export type Config = {
    owners: string[]
    guilds: string[]
    messageScan?: {
        allowedAttachmentMimeTypes: string[]
        filter: {
            roles?: string[]
            users?: string[]
            channels?: string[]
            whitelist: boolean
        }
        humanCorrections: {
            falsePositiveLabel: string
            allow?: {
                users?: string[]
                members?: {
                    permissions?: bigint
                    roles?: string[]
                }
            }
        }
        responses: ConfigMessageScanResponse[]
    }
    logLevel: 'none' | 'error' | 'warn' | 'info' | 'log' | 'trace' | 'debug'
    api: {
        websocketUrl: string
    }
}

export type ConfigMessageScanResponse = {
    triggers: {
        text?: Array<RegExp | ConfigMessageScanResponseLabelConfig>
        image?: Array<RegExp>
    }
    filterOverride?: NonNullable<Config['messageScan']>['filter']
    response: ConfigMessageScanResponseMessage | null
}

export type ConfigMessageScanResponseLabelConfig = {
    /**
     * Label name
     */
    label: string
    /**
     * Confidence threshold
     */
    threshold: number
}

export type ConfigMessageScanResponseMessage = {
    title: string
    description?: string
    fields?: Array<{
        name: string
        value: string
    }>
}
