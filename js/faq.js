const allBlocks = document.querySelectorAll('.js_faq');

allBlocks.forEach(block => {
    block.addEventListener('click', toggleBlock);
});

function toggleBlock(e) {
    e.currentTarget.classList.toggle('open');
}