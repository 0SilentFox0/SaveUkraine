const businessEmailRegex = /^(?!.+@(gmail|yandex|icloud|rambler|ukr|pochta|zoho|gmx|yahoo|outlook|proton|aol|guerilla|mail|mailfence|hotmail|msn|bluehost|fastmail|godady|namecheap|tutanota|posteo|mailbox|kolab|gawab|pookmail|mail.tut.by|spam|a.ua|inet|bigmailbox|mail.ru|inbox.ru|list.ru|bk.ru|internet.ru)\..+)(.+@.+\..+)$/
export const isBusinessEmail = (value: string) => businessEmailRegex.test(value)

export const isPhone = (value: string) => /^\+?[0-9]+$/.test(value)
