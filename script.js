// モーダルの要素を取得
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const modalCaption = document.getElementById("modal-caption");
const closeBtn = document.getElementById("close");

// ギャラリー内の全ての画像にイベントをつける
const galleryImages = document.querySelectorAll(".gallery img");

galleryImages.forEach(img => {
    img.addEventListener("click", () => {
        modal.style.display = "block"; // モーダル表示
        modalImg.src = img.src;         // クリックした画像のsrcをセット
        modalImg.alt = img.alt;         // alt属性もセット（アクセシビリティ向上）
        modalCaption.innerHTML = img.alt; // キャプションを表示
    });
});

// 閉じるボタンにクリックイベントをつける
closeBtn.addEventListener("click", () => {
    modal.style.display = "none"; // モーダル非表示
});

// 背景クリックでも閉じられるようにする
modal.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});