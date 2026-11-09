/* GitHubで共通のカスタムカメラワークを追加する場所です。
   ここに登録した演出は、すべての利用者のアプリに表示されます。
   個人用の演出はアプリ内の「カスタム演出を追加」から登録してください。
   任意フィールド: category ("move"|"style"|"angle"|"transition"、省略時はカスタム扱い)、
   mp (Motion Prompt番号。見本リンクになります)、usage (使いどころ)、tags (検索用キーワード)。
   G番号は恒久割当です。既存の番号は振り直さず、新規は末尾へ追加してください。
   G01-G43: 画角・レンズ系（出典: https://x.com/codex_jisen/status/2113601331269132416 の「AI写真のレンズと画角100選」から、内蔵48種と重複しないものを選定）
   G44-G48: 追加カメラワーク（出典: https://x.com/uchita_success/status/2119368422110982256 のカメラワーク集から、内蔵48種と重複しないもののみ）
*/
window.CUTBOARD_CUSTOM_CAMERAS = [
  { id: "G01", name: "アイレベル", english: "Eye level", description: "カメラを被写体の目の高さに置き、まっすぐ撮る。上下の圧迫感がない自然な目線になる。", category: "angle", usage: "会話や通常の場面の基準アングルに。まず迷ったらこれ。", tags: "eye level,目の高さ,自然,基準,正面目線,angle" },
  { id: "G02", name: "斜め俯瞰", english: "Diagonal high angle", description: "被写体の斜め上から見下ろす。真俯瞰より立体感が残り、位置関係も伝わる。", category: "angle", usage: "テーブル作業や複数人の配置を見せつつ表情も拾いたいとき。", tags: "diagonal high angle,斜め上,俯瞰,見下ろし,angle" },
  { id: "G03", name: "正面", english: "Front view", description: "被写体の真正面から撮る。左右対称になりやすく、対象と向き合う印象になる。", category: "angle", usage: "自己紹介、商品の正面提示、対峙の場面に。", tags: "front view,真正面,front,対称,angle" },
  { id: "G04", name: "真横", english: "Profile view", description: "被写体の真横（横顔・横向き）から撮る。動きの方向とシルエットがはっきりする。", category: "angle", usage: "歩行・横移動の場面や、プロフィール的な紹介に。", tags: "profile,side view,真横,横顔,横向き,angle" },
  { id: "G05", name: "真後ろ", english: "Back view", description: "被写体の真後ろから撮る。顔を見せず、背中とその先の景色で語る。", category: "angle", usage: "旅立ちや眺望の場面、後ろ姿で余韻を残したいとき。", tags: "back view,真後ろ,後ろ姿,背中,angle" },
  { id: "G06", name: "斜め前", english: "Three-quarter front", description: "被写体の斜め前45度ほどから撮る。顔の立体感と奥行きが自然に出る定番の角度。", category: "angle", usage: "人物のポートレートや商品紹介の基本形に。", tags: "three-quarter,斜め前,45度,立体感,angle" },
  { id: "G07", name: "斜め後ろ", english: "Three-quarter back", description: "被写体の斜め後ろから撮る。肩越しより引いて、背中と視線の先を同時に示す。", category: "angle", usage: "人物が何かを見つめる場面や、追跡の導入に。", tags: "three-quarter back,斜め後ろ,背中越し,angle" },
  { id: "G08", name: "足元の高さ", english: "Ground level (feet)", description: "カメラを足元の高さまで下げ、靴や地面の質感を主役にする。", category: "angle", usage: "歩き出し、ダンスのステップ、地面の様子を強調したいとき。", tags: "ground level,足元,地面,靴,low,angle" },
  { id: "G09", name: "膝の高さ", english: "Knee level", description: "カメラを膝の高さに置く。ローアングルほど大げさでなく、ほどよく見上げる。", category: "angle", usage: "子供やペットの目線に近づけたいとき、穏やかな見上げに。", tags: "knee level,膝,見上げ,子供目線,angle" },
  { id: "G10", name: "腰の高さ", english: "Waist level", description: "カメラを腰の高さに置く。歩行者や日常の視点に近い安定した高さ。", category: "angle", usage: "街歩きや作業風景など、日常感のある場面に。", tags: "waist level,腰,日常視点,angle" },
  { id: "G11", name: "テーブル目線", english: "Table level", description: "カメラをテーブルの面すれすれに置き、食器や手元の並びを横から見せる。", category: "angle", usage: "料理・カフェ・デスク作業の場面で、テーブルの世界観を見せたいとき。", tags: "table level,テーブル,机上,料理,デスク,angle" },
  { id: "G12", name: "水面目線", english: "Water surface level", description: "カメラを水面ぎりぎりに置き、水の広がりと反射を大きく写す。", category: "angle", usage: "海・湖・プール・雨上がりの反射を印象的に見せたいとき。", tags: "water level,水面,反射,海,湖,angle" },
  { id: "G13", name: "水中から上へ", english: "Underwater looking up", description: "水の中から水面と上空を見上げる。光の揺らめきと浮遊感が出る。", category: "angle", usage: "プールや海中の場面、幻想的な見上げカットに。", tags: "underwater,水中,見上げ,水面,angle" },
  { id: "G14", name: "空撮", english: "Aerial shot", description: "ドローン等で上空から広範囲を撮る。地形や街の広がりを一望できる。", category: "angle", usage: "場所の規模感を示す導入や、移動ルートの俯瞰に。バーズアイより高い・広い画に。", tags: "aerial,空撮,ドローン,drone,上空,angle" },
  { id: "G15", name: "天井から", english: "Ceiling view", description: "室内の天井際から真下〜斜め下を見下ろす。部屋全体の配置が図のように分かる。", category: "angle", usage: "室内の間取り・人の動線を見せたいとき。", tags: "ceiling,天井,室内俯瞰,見下ろし,angle" },
  { id: "G16", name: "鏡越し", english: "Through the mirror", description: "鏡に映った姿を撮る。本人と鏡像を同時に見せ、視点にひねりが出る。", category: "angle", usage: "身支度やメイクの場面、二面性を見せたいとき。", tags: "mirror,鏡,鏡像,反射,angle" },
  { id: "G17", name: "窓越し", english: "Through the window", description: "ガラス越しに被写体を撮る。反射や曇りが層になり、距離感と物語性が出る。", category: "angle", usage: "カフェや電車の場面、内と外の境界を感じさせたいとき。", tags: "window,窓越し,ガラス越し,反射,angle" },
  { id: "G18", name: "隙間から", english: "Through a gap", description: "扉の隙間や物陰の狭い間から覗くように撮る。秘密めいた視点になる。", category: "angle", usage: "覗き見・緊張感のある場面や、発見の瞬間の導入に。", tags: "gap,隙間,覗き,物陰,angle" },
  { id: "G19", name: "8mm魚眼", english: "8mm fisheye", description: "焦点距離8mm前後の魚眼レンズ。画面の端が大きく丸く歪み、180度近い範囲が写る。", category: "angle", usage: "狭い空間の誇張や、コミカルで勢いのある表現に。3Dスタジオのレンズ焦点距離は最小12mmのため、歪み感の目安として使う。", tags: "8mm,fisheye,魚眼,超広角,歪み,lens,angle" },
  { id: "G20", name: "14mm超広角", english: "14mm ultra wide-angle", description: "焦点距離14mm前後の超広角。遠近感が強く、空間の広さが劇的に見える。", category: "angle", usage: "建築・風景・狭い室内を広く見せたいとき。3Dスタジオのレンズ焦点距離14mmで再現できる。", tags: "14mm,ultra wide,超広角,広角,lens,angle" },
  { id: "G21", name: "24mm広角", english: "24mm wide-angle", description: "焦点距離24mm前後の広角。人物と背景の環境を一緒に写し込みやすい。", category: "angle", usage: "旅行や街撮り、場所の説明を含む人物カットに。3Dスタジオのレンズ焦点距離24mmで再現できる。", tags: "24mm,wide-angle,広角,環境,lens,angle" },
  { id: "G22", name: "35mm準広角", english: "35mm semi wide-angle", description: "焦点距離35mm前後の準広角。人の視野に近く、歪みが少ない自然な広さ。", category: "angle", usage: "スナップやドキュメンタリー風の日常場面に。3Dスタジオのレンズ焦点距離35mmで再現できる。", tags: "35mm,準広角,スナップ,自然,lens,angle" },
  { id: "G23", name: "50mm標準", english: "50mm standard", description: "焦点距離50mm前後の標準レンズ。遠近感が目で見た感覚に最も近く、クセがない。", category: "angle", usage: "基準の画角として、人物も物撮りも無難にまとめたいとき。3Dスタジオのレンズ焦点距離50mmで再現できる。", tags: "50mm,standard,標準,単焦点,lens,angle" },
  { id: "G24", name: "85mmポートレート", english: "85mm portrait", description: "焦点距離85mm前後の中望遠。顔の歪みが少なく、背景がよくぼける人物向きの画角。", category: "angle", usage: "人物の顔や上半身を美しく撮りたいとき。3Dスタジオのレンズ焦点距離85mmで再現できる。", tags: "85mm,portrait,ポートレート,中望遠,人物,lens,angle" },
  { id: "G25", name: "135mm望遠", english: "135mm telephoto", description: "焦点距離135mm前後の望遠。離れた被写体を引き寄せ、背景が大きくぼける。", category: "angle", usage: "ステージやスポーツなど近づけない被写体に。3Dスタジオのレンズ焦点距離135mmで再現できる。", tags: "135mm,telephoto,望遠,引き寄せ,lens,angle" },
  { id: "G26", name: "200mm超望遠", english: "200mm super telephoto", description: "焦点距離200mm前後の超望遠。遠くの被写体を切り取り、遠近が強く圧縮される。", category: "angle", usage: "遠景の切り取りや、圧縮効果で密集感を出したいとき。3Dスタジオのレンズ焦点距離200mmで再現できる。", tags: "200mm,super telephoto,超望遠,圧縮,lens,angle" },
  { id: "G27", name: "圧縮した遠近", english: "Compressed perspective", description: "望遠で撮り、前後の距離感を詰めて見せる。奥の建物や月が大きく迫って見える。", category: "angle", usage: "人混みや街並みの密度感、巨大な背景と人物を重ねたいとき。", tags: "compression,圧縮効果,望遠,遠近,telephoto,angle" },
  { id: "G28", name: "誇張した遠近", english: "Exaggerated perspective", description: "広角で被写体に近づき、手前を大きく奥を小さく見せる。奥行きと迫力が強調される。", category: "angle", usage: "料理や手の動きを大きく見せたいとき、空間の奥行きを誇張したいとき。", tags: "exaggerated perspective,広角,誇張,遠近,wide,angle" },
  { id: "G29", name: "超ロングショット", english: "Extreme long shot", description: "被写体が点のように小さく写るほど引いた画。環境と規模感が主役になる。", category: "angle", usage: "場面の冒頭で場所のスケールを示すとき。エスタブリッシングよりさらに引いた画に。", tags: "extreme long shot,超ロング,引き,スケール,shot size,angle" },
  { id: "G30", name: "ロングショット", english: "Long shot", description: "被写体の全身と周囲の環境が余裕を持って収まる引いた画。", category: "angle", usage: "人物のいる場所と状況を一緒に伝えたいとき。", tags: "long shot,ロング,全身,環境,shot size,angle" },
  { id: "G31", name: "フルショット", english: "Full shot", description: "人物の頭から足先までが画面いっぱいに収まる画。全身の動きが読める。", category: "angle", usage: "ダンスや立ち姿、衣装の全体を見せたいとき。", tags: "full shot,フル,全身,shot size,angle" },
  { id: "G32", name: "腰上ショット", english: "Medium shot (waist up)", description: "人物の腰から上を写す中景。表情と手の動きの両方が見えるバランスの画。", category: "angle", usage: "会話や説明の基本サイズとして。ミディアムショットとも呼ばれる。", tags: "medium shot,腰上,ミディアム,中景,shot size,angle" },
  { id: "G33", name: "膝上ショット", english: "Medium full shot (knee up)", description: "人物の膝から上を写す。全身の雰囲気を残しつつ表情にも寄れる中間の画。", category: "angle", usage: "歩行や立ち姿で、衣装と表情の両方を見せたいとき。アメリカンショットとも呼ばれる。", tags: "medium full,膝上,アメリカンショット,shot size,angle" },
  { id: "G34", name: "胸上ショット", english: "Medium close-up (chest up)", description: "人物の胸から上を写す。顔の表情が主役になり、背景は補助に回る。", category: "angle", usage: "インタビューや感情の場面で、表情をしっかり見せたいとき。バストショットとも呼ばれる。", tags: "medium close-up,胸上,バストショット,表情,shot size,angle" },
  { id: "G35", name: "手元アップ", english: "Hands close-up", description: "手と作業対象だけを大きく写す。顔を出さずに動作そのものを伝える。", category: "angle", usage: "料理・工作・楽器演奏など、手順や技を見せたいとき。", tags: "hands close-up,手元,アップ,作業,shot size,angle" },
  { id: "G36", name: "マクロ", english: "Macro", description: "被写体に極端に近づき、細部や質感を大きく写す接写。肉眼では見えない世界になる。", category: "angle", usage: "小物・昆虫・素材の質感など、細部そのものが主役のとき。", tags: "macro,マクロ,接写,細部,質感,lens,angle" },
  { id: "G37", name: "アナモルフィック", english: "Anamorphic", description: "横長のシネマレンズ特有の画。楕円形のボケと水平に伸びる光のフレアが特徴。", category: "angle", usage: "映画らしい横長で格調のある画にしたいとき。", tags: "anamorphic,アナモルフィック,シネマ,フレア,lens,angle" },
  { id: "G38", name: "ティルトシフト（ミニチュア風）", english: "Tilt-shift (miniature effect)", description: "ピントの合う帯を狭くし、上下をぼかして実景をミニチュア模型のように見せる。", category: "angle", usage: "街やジオラマ風の俯瞰で、おもちゃのような世界観を作りたいとき。", tags: "tilt-shift,ティルトシフト,ミニチュア,ジオラマ,lens,angle" },
  { id: "G39", name: "ソフトフォーカス", english: "Soft focus", description: "全体を柔らかくにじませ、輪郭の硬さを取る。夢のような優しい空気になる。", category: "angle", usage: "ポートレートや回想シーンで、柔らかく優しい印象にしたいとき。", tags: "soft focus,ソフトフォーカス,柔らかい,夢,lens,angle" },
  { id: "G40", name: "オールドレンズ風", english: "Vintage lens look", description: "古いレンズ特有の周辺の流れ・にじみ・色のくすみを再現するレトロな画。", category: "angle", usage: "フィルム風・ノスタルジックな世界観にしたいとき。", tags: "vintage lens,オールドレンズ,レトロ,フィルム風,lens,angle" },
  { id: "G41", name: "浅い被写界深度", english: "Shallow depth of field", description: "ピントの合う範囲を薄くし、主役だけを浮かび上がらせて前後をぼかす。ディープフォーカスの逆。", category: "angle", usage: "主役への視線誘導を最優先したいとき、雑多な背景を消したいとき。", tags: "shallow depth of field,浅い,被写界深度,ボケ,開放,lens,angle" },
  { id: "G42", name: "玉ボケ", english: "Bokeh balls", description: "背景の点光源を大きな丸いボケとして写し、華やかさや幻想感を加える。", category: "angle", usage: "夜景やイルミネーション越しの人物を華やかに見せたいとき。", tags: "bokeh,玉ボケ,ボケ,イルミネーション,夜景,lens,angle" },
  { id: "G43", name: "スプリットディオプター", english: "Split diopter", description: "画面の手前と奥の両方に同時にピントを合わせ、真ん中だけがぼける特殊レンズ表現。", category: "angle", usage: "手前の小物と奥の人物を同時に見せ、緊張関係を作りたいとき。", tags: "split diopter,スプリットディオプター,二重焦点,lens,angle" },
  { id: "G44", name: "ドリーアウト", english: "Dolly out", description: "カメラそのものが被写体から後退する。被写体が小さくなり、周囲の空間が広がって見えてくる。ドリーインの逆。", category: "move", usage: "場面の締めや、人物を取り巻く状況を明かしながら離れたいとき。", tags: "dolly out,pull back,ドリー,後退,camera move" },
  { id: "G45", name: "タイニープラネット", english: "Tiny planet", description: "360度映像をぐるりと丸め、地平線が小さな惑星のように丸まった画にする。", category: "style", usage: "風景の紹介やSNS向けのインパクトある一枚・一瞬に。", tags: "tiny planet,タイニープラネット,360度,惑星,style" },
  { id: "G46", name: "クラッシュズーム", english: "Crash zoom", description: "ズームインを一気に最速で行い、被写体へ瞬間的に迫る。勢いと驚きが出る。", category: "move", usage: "気づきやツッコミの瞬間、コミカルな強調に。通常のズームインより速度が命。", tags: "crash zoom,クラッシュズーム,急ズーム,zoom,camera move" },
  { id: "G47", name: "ダイブ", english: "Dive", description: "カメラが高い位置から被写体へ向かって急降下する。落ちていく感覚と迫力が出る。", category: "move", usage: "空撮から地上の対象へ一気に注目を移したいとき。", tags: "dive,ダイブ,急降下,ドローン,camera move" },
  { id: "G48", name: "ボルトカム", english: "Bolt cam", description: "被写体にカメラを固定したように、対象とカメラが一体で動く。背景だけが流れて見える。", category: "move", usage: "乗り物や走る人物の臨場感を、対象をブレさせずに見せたいとき。", tags: "bolt cam,ボルトカム,固定カメラ,body mount,camera move" }
];
