let cards = [
    {
        id: '1',
        head: 'Тигр',
        body: 'Тигр — вид хищных млекопитающих семейства кошачьих, один из пяти представителей рода пантера, который относится к подсемейству больших кошек. Среди представителей этого вида встречаются крупнейшие животные семейства кошачьих. Тигр является одним из крупнейших наземных хищников, уступая по массе лишь белому и бурому медведям. Основной тон окраски тигров колеблется от ржаво-красного до ржаво-коричневого; живот, грудь и внутренняя поверхность лап светлые. Также имеются светлые отметины на тыльной поверхности ушей. Тело покрыто полосами, цвет которых варьирует от коричневого до полностью чёрного.',
        img: 'img/tiger.jpeg'
    },
    {
        id: '2',
        head: 'Волк',
        body: 'Волк — вид хищных млекопитающих из семейства псовых. Наряду с койотом, обыкновенным шакалом и ещё несколькими видами составляет род волков. Кроме того, как показывают результаты изучения последовательности ДНК и дрейфа генов, является прямым предком домашней собаки, которая обычно рассматривается как подвид волка. Между подвидами волка имеются значительные различия в окраске, часто в соответствии с окружающей средой. Лесные волки — серо-бурые. Тундровые — светлые, почти белые. Пустынные — серовато-рыжеватые. Помимо этого встречаются чисто белые, рыжие или почти чёрные особи.',
        img: 'img/wolf.jpg'
    },
    {
        id: '3',
        head: 'Пантера',
        body: 'Пантера – относится к роду крупных хищных животных из семейства кошачьих. Данный род представлен четырьмя ныне живущими всеми известными хищниками: тигром, леопардом, львом и ягуаром. Пантера является никем иным, как представителем леопардовых. Хотя до сих пор не утихают споры относительно того, к кому именно относится пантера, к ягуарам или леопардам. Выделяют пантер из-за их окраски, ведь многие из них имеют ровный окрас, чаще всего черного цвета.',
        img: 'img/panteri.jpg'
    },
];

const cardsCont = document.querySelector('.cards');
createManyCards(cards, cardsCont);

function createManyCards(array, cont) {
    array.forEach(item => {
        cont.insertAdjacentHTML('beforeend', createCard(item));
    });
}

function createCard({img, head, body, id}) {
    return `
        <article class="card" id="${id}">
            <img src="${img}" alt="">
            <div class="c2">
            <h3>${head}</h3>
            <p>${cropText(body)}</p>
            <div class="btns">
                <button class="btn-delete" onclick="deleteCard(event)">Удалить</button>
                <button class="btn-info">Подробнее</button>
            </div></div>
        </article>
    `;
}

function cropText(text, length = 150) {
    return `${text.substr(0, length)}...`
}

const modalWrapper = document.querySelector('.modal-wrapper');

document.querySelectorAll('.btn-info').forEach(btn => {
    btn.addEventListener('click', showInfo);
});

modalWrapper.addEventListener('click', e => {
    if(e.target === e.currentTarget) closeModal();
})

function showInfo(e) {
    modalWrapper.classList.remove('hide');
    showCard(cards, e)
}

const btnClose = document.querySelector('.modal-close');
btnClose.addEventListener('click', closeModal);

function closeModal() {
    modalWrapper.classList.add('hide');
}

function deleteCard(e) {
    e.target.closest('article.card').remove();
}

function showCard(array, e) {
    let {img, head, body} = array.find(item => item.id === e.target.closest('article.card').id);
    document.querySelector('.card-modal-left > img').src = img;
    document.querySelector('.card-modal-right > h3').textContent = head;
    document.querySelector('.card-modal-right > p').textContent = body;
}

document.addEventListener('keydown', e => {
    if(e.code === 'Escape') closeModal();
});