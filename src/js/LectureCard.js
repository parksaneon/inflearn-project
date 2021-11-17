import { html, LitElement } from 'lit';

export class LectureCard extends LitElement {
  constructor() {
    super();
  }

  render() {
    return html`<link rel="stylesheet" href="./index.css" />
      <li class="card">
        <a class="card-link" href="#">
          <figure class="card-image-container">
            <img
              class="card-image"
              alt="비전공자를 위한 진짜 입문 올인원 개발 클래스"
              src="images/인프런/강의/비전공자를위한개발자취업올인원가이드.jpg"
            />
            <figcaption>비전공자를 위한 개발자 취업 올인원 가이드 [통합편]</figcaption>
          </figure>
          <dl>
            <dt class="sr-only">강사</dt>
            <dd>그랩</dd>
            <dt class="sr-only">평점</dt>
            <dd class="stars">
              <div class="stars-outer">
                <i aria-hidden="true" class="far fa-star"></i>
                <i aria-hidden="true" class="far fa-star"></i>
                <i aria-hidden="true" class="far fa-star"></i>
                <i aria-hidden="true" class="far fa-star"></i>
                <i aria-hidden="true" class="far fa-star"></i>
                <div class="stars-inner">
                  <i aria-hidden="true" class="fas fa-star"></i>
                  <i aria-hidden="true" class="fas fa-star"></i>
                  <i aria-hidden="true" class="fas fa-star"></i>
                  <i aria-hidden="true" class="fas fa-star"></i>
                  <i aria-hidden="true" class="fas fa-star"></i>
                </div>
              </div>
              <span>(72)</span>
            </dd>
            <dt class="sr-only">가격</dt>
            <dd class="lecture-price"><del class="sale">₩44,000</del>₩143,000</dd>
            <dt class="sr-only">태그</dt>
            <dd>
              <ul class="tag-container">
                <li class="tag">
                  <span>+1300명</span>
                </li>
              </ul>
            </dd>
          </dl>
          <span class="on-sale">30% 할인</span>
          <div class="card-dark desktop-only">
            <p class="card-dark__title">비전공자를 위한 진짜 입문 올인원 개발 클래스</p>
            <p class="card-dark__description">
              왕초보도 할 수 있는 웹, 서버, 모바일 앱, 머신러닝까지 익히는 끝판왕 풀스택 강의입니다.
              개발을 어디서부터 시작할지 막막했다면 이 강의를 강력 추천할게요. Javascript 하나로
              진행합니다!
            </p>
            <dl>
              <dt class="sr-only">강의 난이도</dt>
              <dd><i class="fas fa-chart-line"></i>입문</dd>
              <dt class="sr-only">관련 분야</dt>
              <dd><i class="fas fa-code-branch"></i>풀스택, 웹 개발, 취업 이직</dd>
              <dt class="sr-only">사용 기술</dt>
              <dd><i class="fas fa-cubes"></i>JavaScript, React, Node.js</dd>
            </dl>
            <div>
              <ul class="card-icons">
                <li>
                  <span><i class="fas fa-cart-plus"></i></span>
                </li>
                <li>
                  <span><i class="far fa-heart"></i></span>
                </li>
                <li>
                  <span><i class="fas fa-plus"></i></span>
                </li>
              </ul>
            </div>
          </div>
        </a>
      </li>`;
  }
}
customElements.define('lecture-card', LectureCard);
