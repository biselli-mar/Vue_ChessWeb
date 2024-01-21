class PrivateNetworkHandler {
  constructor() {
    this.online = true;
  }

  isOnline() {
    return this.online;
  }

  isOffline() {
    return !this.online;
  }

  setOnline(online) {
    this.online = online;
  }

  setOffline(offline) {
    this.online = !offline;
  }
}

export const NetworkHandler = new PrivateNetworkHandler();
