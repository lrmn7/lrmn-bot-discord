## List of own properties 

configurable with the slashcommand dbset

| PROPERTY | REQUIERED | FORMAT | DESCRIPTION |
| - | - | - | - |
| guildJoinChannel | TRUE | STRING | ID of your Join channel |
| guildLeavingChannel | TRUE | STRING | ID of your leave channel |
| guildAutoLogChannel | TRUE | STRING | ID of your log channel |
| guildYoutubeChannel | OPTIONNAL FOR INIT SETUP | STRING | ID of your Youtube Notification Channel |
| guildTwitchChannel | OPTIONNAL FOR INIT SETUP | STRING | ID of your Twitch Notification Channel |
| roleId00 | FALSE | STRING | ID of default member role 00 |
| roleId01 | FALSE | STRING | ID of default member role 01 |
| roleId02 | FALSE | STRING | ID of default member role 02 |
| roleTwitchNotificationId | OPTIONNAL FOR INIT SETUP | STRING | ID of Twitch role Notification |
| roleYoutubeNotificationId | OPTIONNAL FOR INIT SETUP | STRING | ID of Youtube role Notification |
| customWelcomeMessage | RECOMMENDED | STRING | A character string that will be sent to each new arrival |
| customLeavingMessage00 | RECOMMENDED | STRING | A string that will be sent with each new leave randomly |
| customLeavingMessage01 | RECOMMENDED | STRING | A string that will be sent with each new leave randomly |
| customLeavingMessage02 | RECOMMENDED | STRING | A string that will be sent with each new leave randomly |
| customLeavingMessage03 | RECOMMENDED | STRING | A string that will be sent with each new leave randomly |
| twitchChannelName| OPTIONNAL FOR INIT SETUP | STRING | |
| youtubeChannelId00 | OPTIONNAL FOR INIT SETUP | STRING | |
| testingReplyVar00 | OPTIONNAL FOR INIT SETUP | STRING | A character string that will be tested with each message created (ormis bot), if the message created contains the character string then => replyVar00  |
| testingReplyVar01 | OPTIONNAL FOR INIT SETUP | STRING | A character string that will be tested with each message created (ormis bot), if the message created contains the character string then => replyVar01 |
| replyVar00 | OPTIONNAL FOR INIT SETUP | STRING | a character string in response to the condition => testingReplyVar00 |
| replyVar01 | OPTIONNAL FOR INIT SETUP | STRING | a character string in response to the condition => testingReplyVar01 |
|  |  |  |  |

## Command List 

(recommand to setup permissions as admin command)

- ### Basic Moderation slashcommand :
| COMMAND NAME | DESCRIPTION | RETURN | 
| - | - | - |
| [BAN] | Ban the desired member by deleting X message.s (default factory) | Returns a hidden message to the user indicating what the command did |
| [CLEAR] | clear a message amount in the current channel | Returns a hidden message to the user indicating what the command did |
| [KICK] | Kick the desired member | Returns a hidden message to the user indicating what the command did |
| [TIMEOUT] | Timeout the member during X | Returns a hidden message to the user indicating what the command did |
|  |  |  |

- ### Basic tools command :
| COMMAND NAME | DESCRIPTION | RETURN | 
| - | - | - |
| [database] | Return information from DB | Returns message |
| [dbset] | Allows you to set options such as auto replies | Returns message to the user indicating what the command did |
| [embed] | Return an embed | Returns message to the user including the default embed generated |
| [ping] | Return my ping | Returns message to the user indicating the API ping and the bot ping |
| [talkasbot] | Send a message as the bot in the current channel |  |
| [twitch-check] | Setup the twitch  notification | Returns message to the user indicating what the command did |
| [youtube-check] | Setup the youtube notification | Returns message to the user indicating what the command did |
|  |  |  |



