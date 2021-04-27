export function mockTranscriptSegments() {
  let seconds = 0;

  const data = [...new Array(5000)].map(() => {
    seconds = seconds + randomInteger(10);

    const start = secondsToMinutes(seconds);
    const end = secondsToMinutes(seconds + randomInteger(7));
    const text = loremIpsum();

    const height = text.length * 0.5 + 56;

    return { start, end, height, text };
  });

  return data;
}

// implement actual API (cue in ms)
//
// {
//   "kind":"caption",
//   "language":"en",
//   "cue_end":14000,
//   "cue_start":12000,
//   "lines":[
//      {
//         "text":"Hello!"
//      }
//   ]
// }

// only supports total runtime < 24 hours
export function secondsToMinutes(seconds) {
  const timecode = new Date(1000 * seconds)
    .toISOString()
    .substr(11, 8);

  // if runtime is < 1 hour
  if (seconds < 3600) return timecode.substring(3, 9);

  // if runtime is >= 1 hour
  return timecode;
}

export function loremIpsum(maxSize = 20) {
  const text =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac mauris lectus. Duis ullamcorper semper mattis. Mauris ut interdum metus. Vivamus ornare euismod nisl ac congue. Nunc ac lacinia velit, eu euismod turpis. Proin rhoncus, magna nec commodo commodo, orci massa gravida ex, sed blandit ipsum risus quis lacus. Ut id lobortis diam. Nullam cursus mauris non malesuada condimentum. Integer porta purus quis ante suscipit dictum. Nulla facilisis egestas euismod. Fusce feugiat leo lectus, vitae auctor dolor eleifend sed.Etiam eget porttitor velit, sit amet consectetur neque. Mauris turpis diam, blandit quis justo quis, placerat dictum mi. Cras libero justo, tristique vestibulum aliquam vitae, tempor sit amet nisi. Vestibulum sodales, neque quis placerat faucibus, eros nulla congue nibh, in dictum lacus ante sit amet nunc. Praesent ullamcorper pretium dapibus. Ut venenatis placerat porta. Integer vehicula ipsum sem, non fringilla dui lacinia eu. Aliquam at dolor ut lacus molestie imperdiet a nec turpis. Morbi eu laoreet diam. In hendrerit enim ut risus eleifend, ac sagittis nibh sagittis. Cras varius gravida vehicula. Fusce massa nulla, vestibulum a ultricies facilisis, condimentum at odio. Sed consectetur nulla quis sapien hendrerit, in consequat lacus posuere. Etiam lobortis velit vulputate neque iaculis, nec sagittis elit vestibulum. Aliquam erat volutpat. Donec magna arcu, tincidunt cursus dolor ac, vulputate tristique metus.Nam consectetur, justo a bibendum varius, nisi lacus accumsan sapien, at auctor ligula urna nec neque. Cras ut enim eu velit placerat ornare. Nunc finibus pretium augue. Donec vehicula sit amet mi dapibus pulvinar. Fusce id tincidunt ex. Quisque quis ultrices dolor. Sed sed leo at lacus lacinia laoreet. Fusce vel posuere neque. Duis commodo, metus gravida malesuada varius, sem ex venenatis leo, sit amet pellentesque ex leo ut odio. Nulla molestie ex at mi tincidunt, sed vulputate massa mattis. Aliquam rhoncus quam massa.Praesent vel malesuada magna. Curabitur id ex elit. Morbi sagittis augue cursus congue pharetra. Proin sagittis, urna at consequat iaculis, metus diam ultrices nisl, sit amet eleifend velit nisl at urna. Fusce eget enim eget odio scelerisque cursus. Sed ipsum mauris, gravida sit amet magna ac, porttitor sollicitudin leo. In dictum diam ac turpis molestie, eu euismod tellus fringilla. Vivamus at urna vitae justo porttitor euismod. Maecenas viverra, justo sit amet fringilla aliquet, ante velit volutpat tellus, non faucibus arcu tellus vitae magna. Maecenas vitae vehicula tortor. Nunc sed lorem sed turpis mollis iaculis eu suscipit elit. Donec maximus leo in quam tincidunt efficitur. Praesent at augue vel felis vestibulum dignissim nec non orci. Pellentesque tincidunt commodo mi non fermentum. Vestibulum nunc nibh, lacinia nec augue sed, pharetra feugiat orci. Donec eget leo nec leo elementum tristique eget eget lectus.Donec sodales sit amet sem sed hendrerit. Integer sem tellus, posuere porttitor odio et, viverra aliquam lacus. Aliquam tincidunt ut velit sed lobortis. Praesent finibus rutrum vulputate. Mauris sed suscipit magna. Nunc at erat metus. Aliquam diam augue, euismod sed orci eget, convallis accumsan neque. Sed semper tincidunt malesuada. Etiam vitae diam bibendum, accumsan ligula sed, ullamcorper tortor. In nec nunc placerat, semper tortor ac, semper dui. Duis eu mattis risus, sed condimentum ligula. Donec dignissim arcu nec ornare viverra.Integer sit amet diam non mauris aliquam convallis eu a massa. Curabitur scelerisque tempor diam fermentum molestie. Maecenas vitae felis nec augue varius euismod. Nullam eget lobortis sem, non volutpat libero. Donec rhoncus tincidunt placerat. Sed blandit feugiat urna vitae suscipit. Sed leo erat, ullamcorper quis hendrerit id, bibendum eget quam. Morbi a ligula vel nibh fermentum tristique. Duis consectetur augue id neque lobortis, sit amet tincidunt sapien egestas. Curabitur diam justo, bibendum ut tempus eget, ultrices eget leo. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc est lectus, consequat eget posuere et, sollicitudin a est. Aliquam elementum placerat aliquet. Sed tortor quam, eleifend sed lectus ac, gravida hendrerit ante. Aliquam eget nulla pulvinar, ultrices nibh at, pretium erat. Praesent nec magna diam.Praesent imperdiet leo ante. In bibendum nunc quis elit placerat fermentum. Suspendisse enim massa, sagittis sed auctor id, vestibulum in urna. Aenean et nisi eu ipsum mattis lobortis in vestibulum dolor. Sed tincidunt felis a luctus congue. Quisque venenatis, odio ut consectetur molestie, neque ligula efficitur lacus, a consequat justo nisl nec neque. Praesent eget tortor diam. Quisque leo lacus, tincidunt nec arcu eu, porta interdum nunc. Suspendisse condimentum leo in neque mollis interdum. Nullam ac efficitur odio, mattis accumsan mauris. Pellentesque ac dolor massa. Vivamus non felis feugiat, eleifend massa eget, posuere sem. Pellentesque et risus id leo imperdiet sollicitudin eu id est. Integer venenatis, nisl in semper luctus, lorem ligula blandit magna, commodo luctus dolor augue id dolor.Cras at felis ipsum. Maecenas ac viverra neque, rhoncus tempus odio. Donec tincidunt sodales ligula in porttitor. Duis sodales eu neque ut egestas. Sed iaculis imperdiet rutrum. Mauris suscipit libero vitae viverra fringilla. Duis et sagittis enim, ac tristique tortor. Aliquam nulla nisl, interdum eu magna rhoncus, imperdiet tempus est. Maecenas at imperdiet tellus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.Morbi mattis et elit non efficitur. Curabitur placerat mollis orci, vel feugiat lectus cursus fermentum. Aenean consequat quam felis, eget bibendum tellus tincidunt sed. Pellentesque cursus vestibulum metus, sit amet vulputate sapien ultrices a. Praesent finibus sed nisi quis condimentum. Aenean vitae metus sed odio porta mattis. Duis venenatis, magna ut viverra bibendum, lorem massa rhoncus lorem, vel consectetur leo nibh non est. Praesent massa turpis, rutrum id consequat id, tincidunt eget orci. Aenean nec elit in nulla egestas rutrum ac nec mi. Etiam porta ex nec lectus mollis, eget mattis ligula laoreet. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer feugiat tincidunt dapibus. Mauris blandit ornare suscipit. Donec sed eros convallis, facilisis libero nec, eleifend elit.Phasellus vehicula porta tellus, id sollicitudin urna eleifend sit amet. Quisque aliquet lectus lectus, sed eleifend est interdum vitae. Aliquam ac porta libero. Donec accumsan vehicula lectus eu scelerisque. In hac habitasse platea dictumst. Duis quis est diam. Vestibulum laoreet massa vel accumsan consectetur. Proin luctus laoreet elementum. Vivamus mattis rutrum efficitur. Cras molestie mollis velit sit amet vehicula.Integer accumsan libero diam, et consectetur justo tincidunt non. Vestibulum dignissim tempus nisi, ac ultrices dui ornare in. Ut cursus dolor vel justo interdum, a sodales elit finibus. Nam bibendum velit et venenatis hendrerit. Sed a odio finibus, egestas enim vel, porttitor dolor. Nulla facilisi. Nulla molestie quis augue quis porttitor. Sed justo risus, dignissim ac tortor id, vehicula varius turpis. Donec at porta velit, sed vehicula ante. Sed eleifend, dolor sit amet dictum sollicitudin, magna nisi dapibus erat, non imperdiet massa quam vitae velit. Integer vestibulum sapien cursus imperdiet varius. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Praesent ornare lacus vel rutrum vestibulum. Aliquam ac massa consectetur, commodo nisi feugiat, blandit orci. Proin vitae sollicitudin velit.Vivamus sit amet imperdiet arcu. Aliquam vel dolor arcu. Donec venenatis orci sed ante eleifend vulputate. Quisque nulla diam, maximus et risus a, pretium dapibus sem. Quisque malesuada id sem sit amet maximus. Proin consequat eros eu dui consequat, non congue libero efficitur. Fusce pretium dapibus metus, quis pretium eros blandit in. Aenean ac mattis leo. Phasellus at quam commodo, pulvinar est a, dignissim justo. Nulla porta accumsan velit, sed imperdiet mauris malesuada fringilla. Curabitur laoreet tellus orci, quis sodales libero interdum et. Integer nec felis a odio mollis porta ac vel purus.Proin in dolor vel metus pellentesque efficitur non non ante. Nullam lectus massa, blandit et purus a, bibendum vestibulum orci. Sed sit amet ligula ut erat mattis porta. Nulla tincidunt risus elit, sit amet rutrum turpis ultrices vel. Vestibulum iaculis turpis eget imperdiet venenatis. Integer nec consectetur sapien. Vestibulum velit ligula, hendrerit quis sagittis eu, semper et odio. Quisque sit amet ex feugiat, ultrices nulla non, auctor libero. Donec vel nibh pulvinar, egestas ligula ac, egestas nulla. Fusce dignissim fringilla lacus in tincidunt. Aliquam id nunc eu metus gravida laoreet eget a turpis. Vestibulum molestie magna eget eleifend facilisis.Etiam dignissim eros a sagittis ornare. Sed tempus nibh ac nulla elementum, at pellentesque tellus aliquam. Cras faucibus auctor arcu, at accumsan lorem dignissim at. Aliquam egestas sollicitudin urna vitae sollicitudin. Nunc id nisl at dolor sodales posuere. Sed ut libero id nisl vehicula pretium non nec ex. Ut rutrum vel mi vel rutrum. Mauris in dignissim ipsum. Sed aliquet commodo risus, eu aliquam tortor placerat congue. Maecenas dolor ligula, dapibus id sollicitudin at, efficitur id erat. Praesent cursus blandit orci id blandit. Donec nec bibendum metus. Duis ultrices elit ut egestas congue.';

  const textArray = text.split(' ');

  const size = 3 + randomInteger(maxSize - 3);
  const start = randomInteger(textArray.length);
  const end = start + size;

  const segment = textArray.slice(start, end).join(' ');

  return segment;
}

export function randomInteger(max) {
  return Math.floor(Math.random() * max);
}
