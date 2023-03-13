import style from '../searchbar/style.module.css';

export const Searchbar = () => {
  <header className={style.searchbar}>
    <h1>qweqweqwe</h1>
    <form class="form">
      <button type="submit" class="button">
        <span class="button-label">Search</span>
      </button>

      <input
        class="input"
        type="text"
        autocomplete="off"
        autofocus
        placeholder="Search images and photos"
      />
    </form>
  </header>;
};
