import Phaser from "phaser";
import GameScene from "./scene/gameScene";
import Client from "../client";

/**
 * Class that represents the Turn-Based Science Fiction Action Real-Time Strategy Game (tbsfarts)
 */
export default class TbsfartsGame extends Phaser.Game {
    client: Client;

    constructor(client: Client) {
        const config: Phaser.Types.Core.GameConfig = {
            type: Phaser.AUTO,
            width: 1600,
            height: 900,
            scale: {
                mode: Phaser.Scale.FIT,
                autoCenter: Phaser.Scale.CENTER_BOTH,
            },
            parent: "divId",
            dom: {
                createContainer: true,
            },
            physics: {
                default: "arcade",
            },
        };
        super(config);
        this.client = client;
        this.canvas.oncontextmenu = (e) => {
            e.preventDefault();
        };
        const size = client.gameManager.boardState.length;
        this.scene.add(GameScene.getSceneName(), new GameScene(size, size, client, client.gameManager), true);
    }
}
