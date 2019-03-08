import React, { Component } from 'react';
import './App.css';

interface PokerTableProps {
}
interface PokerTableState {
    players: string[];
}

class Pokertable extends Component<PokerTableProps, PokerTableState> {
    constructor(props: PokerTableProps) {
        super(props);
        this.randomize = this.randomize.bind(this);
        this.changePlayerName = this.changePlayerName.bind(this);

        this.state = {
            players: Array(9).fill(""),
        };
    }

    changePlayerName(event: any, i: number) {
        let players = this.state.players;
        players[i] = event.target.value;
        this.setState({ players });
    }

    randomize(event: any) {
        let array = this.state.players;
        var currentIndex = array.length, temporaryValue, randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        this.setState({ players: array });
    }

    render() {
        return (
            <div>
                <div>
                    {this.state.players.map((player, i) => {
                        return (<input key={i} type="text" value={player} onChange={(e) => this.changePlayerName(e, i)}></input>)
                    })}
                </div>
                <div className="pokertable">
                    <button className="randomize-button" onClick={this.randomize}>Randomize</button>
                    {this.state.players.map((player, i) => {
                        return (<div className={"player-name player" + i} key={i}>{player}</div>)
                    })}
                    <svg viewBox="0 0 512 275" xmlns="http://www.w3.org/2000/svg">
                        <path fill="none" d="M-1-1h514v277H-1z" />
                        <g>
                            <g fill="#40A559">
                                <path d="M414.309 134.238c0 10.137-3.898 19.36-10.272 26.264l35.897 54.483c22.721-18.694 37.211-47.027 37.211-78.747 0-26.305-9.966-50.28-26.327-68.361l-46.03 40.943c5.925 6.803 9.521 15.688 9.521 25.418zM256 34.308h92.91v61.19H256zM375.575 172.972l-36.913.026-13.69 64.616c2.888.36 5.803.549 8.727.549h41.521c24.572 0 47.112-8.697 64.714-23.178l-35.897-54.483c-7.077 7.665-17.207 12.47-28.462 12.47z" />
                                <path d="M375.575 95.504c11.662 0 22.112 5.161 29.213 13.316l46.03-40.943c-18.651-20.612-45.611-33.564-75.598-33.564h-26.315v61.191h26.67zM136.78 238.163h41.521c2.924 0 5.839-.189 8.727-.549l-13.69-64.616-36.913-.026c-11.255 0-21.385-4.805-28.462-12.47l-35.897 54.483c17.601 14.482 40.142 23.178 64.714 23.178z" />
                                <path d="M34.855 136.238c0 31.719 14.49 60.053 37.211 78.747l35.897-54.483c-6.374-6.904-10.272-16.127-10.272-26.264 0-9.716 3.586-18.589 9.496-25.389L60.788 68.321c-16.125 18.029-25.933 41.826-25.933 67.917zM136.425 95.504h26.67V34.313H136.78c-30.201 0-57.329 13.139-75.992 34.008l46.399 40.528c7.101-8.171 17.562-13.345 29.238-13.345z" />
                                <path d="M163.09 34.308H256v61.19h-92.91z" />
                            </g>
                            <path fill="#65C27C" d="M375.575 172.972c21.392 0 38.734-17.342 38.734-38.734 0-21.392-17.342-38.734-38.734-38.734h-239.15c-21.392 0-38.734 17.342-38.734 38.734 0 21.392 17.342 38.734 38.734 38.734l36.913.026 13.69 64.616c9.758-1.217 19.187-4.488 27.474-9.872 7.914-5.141 31.357-8.128 41.498-8.128 10.141 0 33.583 2.987 41.497 8.128 8.287 5.384 17.716 8.654 27.474 9.872l13.691-64.616 36.913-.026z" />
                            <path fill="#7BCC92" d="M256.466 219.619c10.371.086 33.234 3.058 41.031 8.124 8.287 5.384 17.716 8.654 27.474 9.872l13.691-64.617 36.913-.026c21.392 0 38.734-17.342 38.734-38.734 0-21.392-17.342-38.734-38.734-38.734H256.466v124.115z" />
                            <path fill="#378B4F" d="M72.066 214.985c17.601 14.481 40.141 23.178 64.714 23.178h41.521c2.924 0 5.839-.189 8.727-.549l-4.051-19.121h-35.74c-22.417 0-42.98-7.018-59.038-18.705a90.472 90.472 0 0 1-4.055-3.134c-18.38-15.027-29.892-36.531-29.892-60.416 0-20.582 8.565-39.382 22.689-53.808.325-.332.637-.674.969-1.002 17.027-16.841 41.775-27.445 69.327-27.445H364.764c27.357 0 51.953 10.452 68.968 27.086.359.351.697.717 1.049 1.073 14.291 14.462 22.968 33.377 22.968 54.095 0 23.885-11.512 45.389-29.892 60.416a91.217 91.217 0 0 1-4.055 3.134c-16.058 11.687-36.621 18.705-59.038 18.705h-35.74l-4.051 19.121c2.888.36 5.803.549 8.727.549h41.521c24.572 0 47.112-8.697 64.714-23.178 22.721-18.694 37.211-47.027 37.211-78.747 0-26.305-9.966-50.28-26.327-68.361-18.651-20.612-45.611-33.564-75.598-33.564H136.78c-30.201 0-57.329 13.139-75.992 34.008-16.124 18.029-25.932 41.826-25.932 67.917-.001 31.72 14.489 60.054 37.21 78.748z" />
                            <path fill="#B39A7C" d="M134.686 265.424h41.829c15.981 0 31.771-4.297 45.173-13.003 9.875-6.415 21.658-10.142 34.312-10.142s24.437 3.727 34.312 10.142c13.401 8.706 29.192 13.003 45.173 13.003h41.829c70.242 0 127.185-56.943 127.185-127.185 0-70.243-56.943-127.185-127.185-127.185H134.685C64.443 11.053 7.5 67.995 7.5 138.238s56.943 127.186 127.186 127.186zM34.855 136.238c0-56.292 45.633-101.925 101.925-101.925h238.44c56.292 0 101.925 45.633 101.925 101.925 0 56.292-45.633 101.925-101.925 101.925h-41.521c-12.807 0-25.461-3.444-36.201-10.421-7.914-5.141-31.357-8.128-41.497-8.128s-33.583 2.987-41.498 8.128c-10.74 6.977-23.394 10.421-36.201 10.421H136.78c-56.292 0-101.925-45.633-101.925-101.925z" />
                            <path d="M512 138.238C512 63.972 451.58 3.552 377.314 3.552H134.686C60.42 3.553 0 63.973 0 138.238s60.42 134.686 134.686 134.686h41.829c17.91 0 34.943-4.915 49.259-14.214 8.994-5.843 19.446-8.932 30.227-8.932s21.232 3.089 30.227 8.932c14.315 9.299 31.349 14.214 49.259 14.214h41.829c74.264 0 134.684-60.42 134.684-134.686zM377.314 257.924h-41.829c-15.003 0-29.211-4.078-41.087-11.792-11.433-7.428-24.711-11.354-38.398-11.354s-26.966 3.926-38.398 11.353c-11.876 7.715-26.084 11.793-41.087 11.793h-41.829C68.69 257.924 15 204.233 15 138.238S68.69 18.552 134.686 18.552h242.629C443.31 18.553 497 72.243 497 138.238s-53.69 119.686-119.686 119.686z" />
                            <path d="M456.199 209.834c.217-.238.428-.478.643-.717.414-.463.828-.925 1.233-1.394.242-.28.478-.564.717-.846.362-.428.728-.853 1.083-1.286.598-.728 1.186-1.462 1.764-2.203l.091-.12a110.25 110.25 0 0 0 1.721-2.274l.067-.093c11.301-15.363 18.316-33.303 20.436-52.335l.029-.266a113.118 113.118 0 0 0 .455-5.399c.015-.252.032-.504.046-.757.039-.733.067-1.469.092-2.205.009-.256.021-.511.028-.767.025-.976.041-1.954.041-2.935 0-.895-.012-1.789-.034-2.681-.008-.336-.023-.671-.035-1.007-.019-.548-.036-1.097-.063-1.644-.02-.419-.048-.837-.073-1.255-.027-.459-.054-.917-.087-1.375-.033-.461-.073-.92-.112-1.38-.035-.408-.07-.816-.109-1.223-.047-.49-.099-.978-.153-1.466a103.26 103.26 0 0 0-.322-2.641c-.047-.349-.097-.698-.147-1.047a113.88 113.88 0 0 0-.234-1.553c-.054-.34-.112-.679-.169-1.019a99.696 99.696 0 0 0-.27-1.545c-.064-.349-.133-.697-.201-1.044-.096-.498-.192-.996-.295-1.492-.082-.394-.171-.787-.258-1.18-.097-.442-.192-.885-.294-1.325-.148-.636-.306-1.268-.465-1.901-.048-.191-.092-.383-.141-.573a109.107 109.107 0 0 0-19.923-40.26l.195-.173-5.075-5.609-4.989-5.514-.197.175a109.485 109.485 0 0 0-21.547-16.172 108.7 108.7 0 0 0-51.54-14.482c-.959-.025-1.921-.038-2.886-.038H136.78c-.968 0-1.932.014-2.894.039-.079.002-.157.007-.236.009-17.763.501-34.479 5.255-49.166 13.28-.316.172-.628.352-.942.527-.425.238-.851.472-1.272.715a109.499 109.499 0 0 0-21.935 16.585l-.197-.172-4.941 5.525-5.059 5.656.198.173a109.226 109.226 0 0 0-15.377 27l-.004.009c-.295.75-.582 1.503-.86 2.259l-.152.412c-.224.616-.441 1.234-.654 1.854-.088.254-.176.508-.262.763a95.23 95.23 0 0 0-.483 1.485c-.117.365-.235.729-.348 1.095-.11.356-.214.714-.319 1.071-.148.496-.296.991-.437 1.49-.028.098-.053.198-.08.296a108.338 108.338 0 0 0-2.153 9.287l-.031.16c-.128.693-.247 1.39-.361 2.088l-.08.479c-.101.634-.195 1.27-.286 1.907-.033.234-.067.468-.098.702a114.412 114.412 0 0 0-.493 4.276c-.034.356-.065.713-.095 1.07-.042.496-.084.992-.12 1.49-.031.423-.055.848-.081 1.272-.026.441-.055.881-.076 1.324-.026.53-.043 1.06-.061 1.591-.011.347-.027.692-.036 1.04a107.677 107.677 0 0 0 .007 5.622c.008.316.025.63.036.946.023.666.048 1.331.083 1.994.02.382.048.762.073 1.143.038.591.076 1.182.123 1.771.034.421.074.84.112 1.26.05.541.1 1.082.157 1.62a124.561 124.561 0 0 0 .55 4.33c.062.422.127.843.194 1.263a103.057 103.057 0 0 0 .455 2.646c.12.653.244 1.305.375 1.954l.102.483c4.574 22.026 15.849 42.164 32.555 57.71l-.118.179 5.209 4.286 6.439 5.298.187-.283a108.966 108.966 0 0 0 10.137 6.309c.646.357 1.298.706 1.952 1.05.504.263 1.007.528 1.514.784a109.38 109.38 0 0 0 3.412 1.651c.119.055.236.112.355.166a108.586 108.586 0 0 0 35.96 9.492l.135.012c1.473.126 2.955.224 4.444.29.185.008.37.014.556.021 1.456.058 2.918.096 4.388.096h41.521c.828 0 1.662-.015 2.497-.043.086-.003.172-.002.258-.005l.062.294 6.177-.77a76.738 76.738 0 0 0 1.984-.247l6.778-.846-.089-.421a72.18 72.18 0 0 0 17.093-6.367c.153-.08.307-.159.46-.241a66.766 66.766 0 0 0 2.252-1.261c.286-.167.573-.333.857-.504a67.55 67.55 0 0 0 1.959-1.22c5.775-3.752 27.087-6.918 37.411-6.918s31.636 3.166 37.411 6.917c.645.419 1.3.824 1.961 1.222.281.17.565.333.849.499a68.978 68.978 0 0 0 2.254 1.262c.156.083.313.164.47.246a72.174 72.174 0 0 0 17.087 6.365l-.089.421 6.782.846c.624.089 1.252.161 1.88.235l6.276.783.063-.295c.086.003.172.002.258.005.836.028 1.669.043 2.498.043h41.521c1.51 0 3.014-.038 4.514-.098.112-.005.223-.007.334-.012 21.056-.912 41.043-7.75 58.027-19.723l.162.246 5.651-4.649c.428-.347.854-.697 1.278-1.051l4.719-3.884-.118-.179a107.451 107.451 0 0 0 2.335-2.24c.156-.154.315-.304.471-.459.149-.149.293-.302.441-.452a85.104 85.104 0 0 0 1.911-1.982c.421-.446.84-.894 1.252-1.346zm13.416-71.21l-.003.097c-.493 19.034-6.656 37.184-17.503 52.359l-.05.068a97.521 97.521 0 0 1-1.248 1.701l-.355.467c-.327.43-.657.858-.991 1.283-.209.265-.422.528-.634.791-.254.316-.509.631-.767.943-.284.343-.572.683-.861 1.022a80.383 80.383 0 0 1-1.621 1.855l-.516.574c-.359.394-.724.784-1.09 1.173-.174.185-.348.37-.524.554-.346.362-.698.719-1.051 1.076-.219.222-.438.444-.66.664-.112.111-.226.22-.339.331l-28.089-42.634a46.034 46.034 0 0 0 4.853-8.721l.006-.015a46.044 46.044 0 0 0 1.538-4.19l.061-.205a47.23 47.23 0 0 0 .646-2.324c.132-.525.253-1.052.366-1.582.037-.175.077-.348.113-.524.137-.683.262-1.37.369-2.06.017-.112.03-.226.046-.339.085-.581.16-1.165.223-1.751.025-.229.045-.459.067-.689.047-.502.085-1.006.115-1.511.013-.219.028-.437.038-.657.032-.711.054-1.424.054-2.14 0-.698-.021-1.393-.053-2.087-.009-.207-.021-.413-.032-.62a48.114 48.114 0 0 0-.123-1.615c-.016-.171-.027-.343-.045-.513a48.437 48.437 0 0 0-.378-2.744c-.057-.345-.12-.689-.185-1.032-.064-.34-.127-.681-.199-1.018a45.615 45.615 0 0 0-.36-1.557c-.091-.364-.19-.724-.29-1.084a49.273 49.273 0 0 0-.55-1.858c-.099-.308-.206-.613-.312-.919a46.811 46.811 0 0 0-1.861-4.586c-.075-.158-.145-.319-.221-.477a45.429 45.429 0 0 0-.901-1.757l-.209-.379a44.178 44.178 0 0 0-.925-1.606c-.03-.05-.059-.101-.09-.151-.069-.114-.135-.23-.205-.344l6.236-5.547 28.888-25.696a94.53 94.53 0 0 1 12.192 20.811c.131.31.256.622.384.934a93.493 93.493 0 0 1 1.711 4.477c.151.428.304.854.449 1.285a94.27 94.27 0 0 1 1.153 3.681c.302 1.038.59 2.081.857 3.13.043.17.083.341.125.512.268 1.08.52 2.164.749 3.255l.051.234c.241 1.159.457 2.325.655 3.495l.082.493c.193 1.179.367 2.362.515 3.55l.019.162c.141 1.15.259 2.305.358 3.463l.04.444a94.675 94.675 0 0 1 .24 4.134c.044 1.175.073 2.352.073 3.533a99.624 99.624 0 0 1-.031 2.381zM375.22 41.813c1.465 0 2.927.037 4.385.105l.173.007a94.583 94.583 0 0 1 42.23 12.318l.083.047a95.737 95.737 0 0 1 3.175 1.913 91.532 91.532 0 0 1 3.267 2.144 93.757 93.757 0 0 1 3.251 2.33 95.16 95.16 0 0 1 8.138 6.856l-34.919 31.06a46.152 46.152 0 0 0-3.525-2.631c-.094-.064-.189-.124-.284-.187a45.926 45.926 0 0 0-1.453-.932c-.196-.121-.395-.237-.593-.355a44.24 44.24 0 0 0-2.967-1.619 43.358 43.358 0 0 0-.993-.484c-.264-.124-.531-.242-.797-.361a44.617 44.617 0 0 0-1.185-.516c-.171-.071-.345-.135-.517-.204a45.686 45.686 0 0 0-5.159-1.721l-.068-.019a48.438 48.438 0 0 0-1.492-.364c-.199-.046-.397-.095-.597-.138-.44-.095-.883-.181-1.328-.263a45.702 45.702 0 0 0-2.03-.333 43.8 43.8 0 0 0-1.021-.13c-.357-.042-.714-.084-1.074-.118-.43-.041-.863-.07-1.295-.099-.284-.019-.566-.042-.852-.056a45.896 45.896 0 0 0-2.198-.056h-19.17v-46.19h18.815v-.004zm-33.815 0v46.19H263.5v-46.19h77.905zm-92.905 0v46.19l-61.396.001h-16.509V41.813H248.5zm-92.905 0v46.191h-19.17c-.736 0-1.47.021-2.202.056-.285.013-.567.037-.85.056-.434.029-.868.058-1.3.099-.359.034-.716.076-1.072.118a49.84 49.84 0 0 0-1.029.131 40.013 40.013 0 0 0-2.042.336c-.439.082-.876.167-1.31.261-.216.047-.431.099-.646.149-.484.112-.967.226-1.446.353-.086.023-.171.05-.257.073a45.973 45.973 0 0 0-4.964 1.666c-.186.074-.374.144-.559.221-.381.158-.756.327-1.131.495-.286.128-.572.254-.855.387-.316.149-.628.304-.94.46a45.872 45.872 0 0 0-1.797.946c-.409.227-.814.461-1.216.7-.186.111-.373.221-.557.335-.489.3-.971.611-1.449.93-.098.065-.198.129-.295.195a46.094 46.094 0 0 0-3.589 2.686L71.694 67.889a95.35 95.35 0 0 1 8.322-7.06c.226-.17.452-.34.68-.508a94.142 94.142 0 0 1 4.266-2.979 94.708 94.708 0 0 1 4.379-2.72c.129-.075.255-.153.384-.227a94.515 94.515 0 0 1 42.466-12.469c.052-.003.105-.004.158-.006a94.637 94.637 0 0 1 4.43-.107h18.816zm-59.984 70.732c-.104.194-.201.391-.301.587-.37.718-.721 1.446-1.054 2.186-.07.155-.143.309-.211.465a45.787 45.787 0 0 0-2.029 5.622l-.11.386a45.864 45.864 0 0 0-1.242 5.885c-.023.162-.041.325-.062.488-.106.802-.19 1.61-.254 2.424-.019.243-.04.485-.056.729a46.323 46.323 0 0 0-.102 2.921c0 .714.022 1.426.054 2.135.01.224.026.446.039.669.03.499.068.996.114 1.492.022.236.043.473.069.708.062.568.134 1.133.216 1.697.019.131.034.264.054.395.105.683.229 1.361.365 2.036.039.192.082.381.123.572a43.71 43.71 0 0 0 .503 2.109c.151.573.313 1.143.486 1.709l.082.276c.44 1.406.949 2.788 1.521 4.145l.034.08a46.02 46.02 0 0 0 4.837 8.683l-22.959 34.847-5.106 7.749c-14.186-13.946-24.002-32.324-27.167-52.87l-.013-.082a93.402 93.402 0 0 1-.27-1.921c-.02-.155-.044-.309-.064-.463-.069-.542-.128-1.087-.187-1.631-.027-.251-.059-.501-.085-.753-.048-.478-.087-.958-.128-1.438-.027-.316-.059-.632-.083-.948-.034-.449-.058-.901-.086-1.352-.021-.346-.047-.692-.065-1.039-.024-.477-.038-.957-.055-1.436-.011-.321-.028-.641-.036-.963-.02-.8-.031-1.603-.031-2.408 0-1.171.029-2.339.072-3.505l.025-.667c.051-1.159.12-2.316.213-3.469l.029-.326c.1-1.186.219-2.368.364-3.546l.012-.102a94.707 94.707 0 0 1 2.069-11.162l.049-.202a97.36 97.36 0 0 1 .935-3.447c.042-.144.086-.287.129-.431a94.56 94.56 0 0 1 1.039-3.294l.057-.17c.334-.985.693-1.961 1.059-2.935.129-.342.257-.684.39-1.024.335-.861.685-1.716 1.045-2.567a92.601 92.601 0 0 1 1.199-2.69 94.161 94.161 0 0 1 1.55-3.197l.147-.291a94.673 94.673 0 0 1 8.946-14.149l16.537 14.444 18.854 16.468c-.036.058-.066.119-.101.177a52.12 52.12 0 0 0-1.36 2.394zm41.169 118.118a94.582 94.582 0 0 1-3.972-.09 94.676 94.676 0 0 1-38.711-10.124c-.439-.222-.874-.454-1.31-.684a94.698 94.698 0 0 1-10.594-6.521l27.303-41.44c.265.19.537.369.806.553.151.104.3.208.452.31.385.257.776.505 1.168.75a46.264 46.264 0 0 0 3.615 2.046l.134.069a45.844 45.844 0 0 0 14.773 4.539c.261.034.523.07.785.1.35.039.701.073 1.053.104.406.037.813.067 1.221.093.269.017.537.036.806.048.702.032 1.405.054 2.11.054l30.84.022 10.629 50.169H136.78v.002zM256 212.114c-9.184 0-35.343 2.688-45.583 9.339-.635.413-1.282.811-1.938 1.198-.101.06-.204.115-.305.174-.585.34-1.175.673-1.775.992l-.147.077c-4.167 2.201-8.682 3.901-13.395 5.043l-13.44-63.436-42.991-.03a31.272 31.272 0 0 1-15.323-4.033l-.171-.099a31.076 31.076 0 0 1-3.46-2.3 27.707 27.707 0 0 1-.765-.602c-.111-.09-.22-.183-.329-.274a31.74 31.74 0 0 1-.899-.779l-.128-.119a31.431 31.431 0 0 1-6.372-8.135l-.029-.055a30.818 30.818 0 0 1-1.939-4.35 31.81 31.81 0 0 1-.485-1.473 33.328 33.328 0 0 1-.407-1.479 31.85 31.85 0 0 1-.188-.812c-.049-.224-.099-.447-.143-.672a30.175 30.175 0 0 1-.143-.797c-.039-.232-.081-.463-.115-.696-.04-.274-.072-.551-.105-.827-.027-.225-.057-.45-.079-.676-.031-.315-.051-.632-.072-.949-.013-.19-.031-.378-.04-.568a31.374 31.374 0 0 1-.039-1.537c0-.503.014-1.003.038-1.5.01-.208.028-.415.042-.623.019-.281.038-.563.064-.842.025-.265.058-.53.09-.794.026-.213.051-.426.081-.637a33.972 33.972 0 0 1 .43-2.367l.092-.398c.081-.344.166-.688.259-1.029.027-.1.057-.198.084-.297.104-.366.211-.731.328-1.093.018-.057.039-.113.057-.17a31.321 31.321 0 0 1 1.882-4.489c.092-.179.18-.36.275-.536.1-.185.207-.366.31-.55.142-.251.282-.502.431-.749.086-.144.178-.284.267-.427.176-.282.353-.563.538-.838.077-.116.158-.229.237-.344.205-.297.412-.591.626-.88.072-.097.146-.192.219-.289.229-.301.461-.598.7-.89l.21-.254c.224-.268.453-.531.686-.792.148-.166.299-.328.449-.49.212-.227.425-.454.643-.674.147-.148.297-.292.447-.437.229-.223.458-.446.694-.662.145-.132.295-.259.442-.388.246-.217.491-.436.744-.645.138-.114.28-.22.42-.331.416-.332.84-.652 1.273-.963.264-.189.527-.381.797-.562.158-.106.321-.205.48-.308.296-.191.592-.381.894-.562.144-.086.291-.167.436-.251.328-.189.658-.376.993-.553.128-.068.257-.132.386-.198.362-.185.725-.364 1.094-.535.111-.052.223-.102.335-.152.392-.176.788-.345 1.188-.505l.289-.114a31.725 31.725 0 0 1 2.859-.953l.225-.064c.457-.125.917-.237 1.38-.341.073-.016.145-.035.218-.051.46-.1.923-.186 1.388-.265.081-.014.16-.03.241-.043a31.26 31.26 0 0 1 1.369-.186c.094-.011.186-.026.28-.036.448-.048.898-.081 1.35-.11.104-.006.207-.018.312-.024a31.596 31.596 0 0 1 1.66-.045H171.358l204.22-.001c.555 0 1.109.016 1.66.045.098.005.194.016.292.022.458.029.915.063 1.37.111.086.009.17.023.256.033.467.054.932.114 1.395.189.07.011.138.026.208.037.476.08.951.169 1.422.271.062.013.123.029.185.043.475.106.947.221 1.416.349l.187.053a31.253 31.253 0 0 1 2.902.967l.248.098c.414.165.824.34 1.23.522l.297.134c.382.176.759.362 1.133.553.117.06.235.119.351.18.348.184.691.377 1.032.574.133.077.268.151.4.23.316.188.625.387.935.586.147.095.298.187.443.285.289.193.57.397.853.6.315.227.625.459.931.698.24.187.483.371.719.566.247.204.485.418.726.629.153.134.308.265.458.403.234.214.461.436.689.657.15.146.302.29.449.439.219.221.432.448.644.676a31.214 31.214 0 0 1 2.032 2.406c.081.107.164.214.244.322.206.278.405.561.602.846.086.125.175.249.259.375.176.263.345.532.514.801.096.154.195.306.289.462.139.23.27.466.403.7.113.198.229.395.337.596.078.144.149.292.225.438.762 1.472 1.409 3 1.927 4.572.02.059.041.118.06.178.117.362.225.728.328 1.094.028.099.057.197.084.296a45.662 45.662 0 0 1 .352 1.429 29.3 29.3 0 0 1 .289 1.474 27.344 27.344 0 0 1 .223 1.533c.032.265.065.53.09.796.026.279.045.561.064.843.014.208.032.414.042.623.024.498.038.998.038 1.501 0 .516-.014 1.028-.039 1.538-.009.186-.027.371-.039.556-.021.323-.042.645-.073.965-.021.217-.05.432-.076.648-.034.287-.068.574-.11.859-.032.222-.072.442-.109.662-.047.279-.095.558-.149.835-.042.213-.089.425-.136.637-.063.284-.126.568-.197.85a32.762 32.762 0 0 1-.567 1.989 29.832 29.832 0 0 1-.476 1.373 30.464 30.464 0 0 1-.539 1.348c-.169.394-.345.785-.53 1.17l-.072.152c-.21.434-.429.862-.659 1.285l-.006.012a31.454 31.454 0 0 1-6.412 8.178c-.027.025-.054.051-.082.075-.307.279-.623.549-.941.816-.094.078-.187.158-.282.235a36.17 36.17 0 0 1-1.311 1.012 33.276 33.276 0 0 1-1.861 1.262c-.342.214-.688.422-1.037.622l-.229.132a31.27 31.27 0 0 1-15.281 4.021l-.028.001-42.985.03-13.44 63.435a57.866 57.866 0 0 1-13.391-5.041c-.052-.027-.104-.053-.155-.081a54.753 54.753 0 0 1-1.761-.984c-.106-.062-.214-.12-.319-.182a52.027 52.027 0 0 1-1.935-1.196c-10.241-6.649-36.4-9.337-45.584-9.337zm78.111 18.549l10.629-50.169 30.835-.022c.705 0 1.409-.021 2.111-.054.269-.012.536-.031.804-.048a50.157 50.157 0 0 0 2.275-.197c.266-.03.531-.067.796-.102a45.828 45.828 0 0 0 14.756-4.533l.17-.087c.492-.25.981-.505 1.462-.772l.096-.055a45.765 45.765 0 0 0 1.993-1.181c.409-.255.816-.513 1.218-.781.142-.095.282-.194.424-.291.275-.188.553-.372.825-.566l27.323 41.471c-14.827 10.508-32.501 16.547-50.718 17.302l-.509.019a92.7 92.7 0 0 1-3.378.066h-41.112z" />
                        </g>
                    </svg>
                </div>
            </div>
        );
    }
}

export default Pokertable;