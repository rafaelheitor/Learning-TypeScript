class RemoteController {
  protected device: Device;

  constructor(device: Device) {
    this.device = device;
  }

  public togglePower(): void {
    const actualPowerStatus = this.device.getPower();
    this.device.setPower(!actualPowerStatus);
    console.log(
      `${this.device.getName()} power status: ${this.device.getPower()}`
    );
  }
}

class RemoteControllerWithVolume extends RemoteController {
  public volumeUp(): void {
    const oldVolume = this.device.getVolume();
    this.device.setVolume(oldVolume + 10);
    console.log(
      `${this.device.getName()} actual volume ${this.device.getVolume()}`
    );
  }

  public volumeDown(): void {
    const oldVolume = this.device.getVolume();
    this.device.setVolume(oldVolume - 10);
    console.log(
      `${this.device.getName()} actual volume ${this.device.getVolume()}`
    );
  }
}

class RemoteControllerWithChannels extends RemoteControllerWithVolume {
  public channelUp(): void {
    const oldChannel = this.device.getChannel();
    this.device.setChannel(oldChannel + 1);
    console.log(`actual channel: ${this.device.getChannel()}`);
  }

  public channelDown(): void {
    const mininumChannelAllowed = this.device.getChannel() <= 1;
    if (mininumChannelAllowed) return;
    const oldChannel = this.device.getChannel();
    this.device.setChannel(oldChannel - 1);
    console.log(`actual channel: ${this.device.getChannel()}`);
  }
}

interface Device {
  getName(): string;
  getPower(): boolean;
  setPower(powerStatus: boolean): void;
  setVolume(volume: number): void;
  getVolume(): number;
  getChannel(): number;
  setChannel(channel: number): void;
}

class Tv implements Device {
  private name = "TV";
  private power = false;
  private volume = 10;
  private channel = 1;

  public getName(): string {
    return this.name;
  }

  public getPower(): boolean {
    return this.power;
  }

  setPower(powerStatus: boolean): void {
    this.power = powerStatus;
  }

  setVolume(volume: number): void {
    if (volume <= 0) return;
    if (volume >= 100) return;
    this.volume = volume;
  }

  getVolume(): number {
    return this.volume;
  }

  getChannel(): number {
    return this.channel;
  }

  setChannel(channel: number): void {
    this.channel = channel;
  }
}

class Radio implements Device {
  private name = "Radio";
  private power = false;
  private volume = 10;
  private channel = 1;

  public getName(): string {
    return this.name;
  }

  public getPower(): boolean {
    return this.power;
  }

  setPower(powerStatus: boolean): void {
    this.power = powerStatus;
  }

  setVolume(volume: number): void {
    if (volume <= 0) return;
    if (volume >= 100) return;
    this.volume = volume;
  }

  getVolume(): number {
    return this.volume;
  }

  getChannel(): number {
    return this.channel;
  }

  setChannel(channel: number): void {
    this.channel = channel;
  }
}

function secondBridgeClientCode(
  abstraction:
    | RemoteController
    | RemoteControllerWithVolume
    | RemoteControllerWithChannels
): void {
  const remoteControllerVolumeTypeGuard = "volumeUp" in abstraction;
  const remoteControllerChannelTypeGuard = "channelUp" in abstraction;
  abstraction.togglePower();

  if (!remoteControllerVolumeTypeGuard) return;
  abstraction.volumeUp();
  abstraction.volumeDown();

  if (!remoteControllerChannelTypeGuard) return;
  abstraction.channelUp();
  abstraction.channelDown();
}

const tv = new Tv();
const radio = new Radio();

const tvRemoteControl = new RemoteControllerWithVolume(tv);
secondBridgeClientCode(tvRemoteControl);

const radioRemoteControl = new RemoteController(radio);
secondBridgeClientCode(radioRemoteControl);

const tvRemoteControlwithChannel = new RemoteControllerWithChannels(tv);
secondBridgeClientCode(tvRemoteControlwithChannel);
