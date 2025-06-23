import { Component } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less'], // اگر با less کار می‌کنی، یا styles.css در صورت استفاده از css
})
export class HomeComponent {
  players: string[] = ['Ali', 'Sara', 'Reza'];
  selectedPlayers: string[] = [];
  gameTitle: string = '';
  activeGames: { id: number; title: string; time: string }[] = [];

  constructor(private message: NzMessageService) {}

  startGame(): void {
    if (!this.gameTitle || this.selectedPlayers.length === 0) {
      this.message.error('لطفاً عنوان بازی و بازیکنان را وارد کنید.');
      return;
    }

    const newGame = {
      id: Date.now(),
      title: this.gameTitle,
      time: new Date().toLocaleTimeString(),
    };

    this.activeGames.unshift(newGame);
    this.message.success(`بازی "${this.gameTitle}" شروع شد!`);
    this.resetForm();
  }

  endGame(id: number): void {
    this.activeGames = this.activeGames.filter((game) => game.id !== id);
    this.message.info('بازی پایان یافت.');
  }

  resetForm(): void {
    this.gameTitle = '';
    this.selectedPlayers = [];
  }
}
