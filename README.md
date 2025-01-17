# @asutrick/n2words
[Original project by forzagreen](https://github.com/forzagreen/n2words)
__n2words__ converts numerical numbers into written ones, supports [27 languages](https://github.com/forzagreen/n2words#supported-languages), and has zero dependencies.
## This Fork

This fork changes the English written number functionality. Significant words are capitalized and 'and' is removed.

## Example

```js
n2words(123)   // 'One Hundred Twenty-Three'
n2words(-1.5)  // 'minus One point Five'

n2words(123, {lang: 'fr'})  // 'cent vingt-trois'
n2words(123, {lang: 'es'})  // 'ciento veintitrés'
n2words(123, {lang: 'ar'})  // 'مائة و ثلاثة و عشرون'
```

See the [Wiki](https://github.com/forzagreen/n2words/wiki) for examples and advanced usage like [importing only specific languages](https://github.com/forzagreen/n2words/wiki/Importing-only-specific-languages).

## Install

```sh
npm install @asutrick/n2words
```

## Usage

### ESM

```js
import n2words from '@asutrick/n2words'
```

### CommonJS ([dynamic import](https://nodejs.org/api/esm.html#import-expressions))

```js
import('n2words').then(({default: n2words}) => {
    n2words(100)
})
```

### Browser

```html
<script src="./n2words.js"></script>
<script>
    n2words(100)
</script>
```

n2words is also available on [jsDelivr](https://www.jsdelivr.com/package/npm/n2words).

## Supported Languages

- `en` (English, default)
- `ar` (Arabic)
- `az` (Azerbaijani)
- `cz` (Czech)
- `dk` (Danish)
- `de` (German)
- `es` (Spanish)
- `fr` (French)
- `fa` (Farsi)
- `he` (Hebrew)
- `hr` (Croatian)
- `hu` (Hungarian)
- `id` (Indonesian)
- `it` (Italian)
- `ko` (Korean)
- `lt` (Lithuanian)
- `lv` (Latvian)
- `nl` (Dutch)
- `no` (Norwegian)
- `pl` (Polish)
- `pt` (Portuguese)
- `ru` (Russian)
- `sr` (Serbian)
- `tr` (Turkish)
- `uk` (Ukrainian)
- `vi` (Vietnamese)
- `zh` (Chinese)

## Contributing

This is a personal fork. Any issues/requests will not be acknowledged. The original repository is actively updated, so try there.

## License

[MIT](https://github.com/forzagreen/n2words/blob/master/LICENSE)
