/* GitHubで共通のカスタムカメラワークを追加する場所です。
   ここに登録した演出は、すべての利用者のアプリに表示されます。
   個人用の演出はアプリ内の「カスタム演出を追加」から登録してください。
   任意フィールド: category ("move"|"style"|"angle"|"transition"、省略時はカスタム扱い)、
   mp (Motion Prompt番号。見本リンクになります)、usage (使いどころ)、tags (検索用キーワード)。
*/
window.CUTBOARD_CUSTOM_CAMERAS = [
  // 例：先頭の // を外して編集すると、コード管理の演出として表示されます
  // { id: "G01", name: "スライダー移動", english: "Slider move", description: "スライダーで水平に移動する" },
  // { id: "G02", name: "ラックズーム", english: "Rack zoom", description: "ズームを使って視線を誘導する" }
];
