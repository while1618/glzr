/* @refresh reload */
import { createStore } from "solid-js/store";
import { render } from "solid-js/web";
import * as zebar from "zebar";
import BatteryStatus from "./Battery/BatteryStatus";
import WindowsButton from "./Buttons/WindowsButton";
import CpuStatus from "./Cpu/CpuStatus";
import "./index.css";
import InputMethodStatus from "./InputMethod/InputMethodStatus";
import MediaStatus from "./Media/MediaStatus";
import MemoryStatus from "./Memory/MemoryStatus";
import NetworkStatus from "./Network/NetworkStatus";
import Systray from "./Systray/Systray";
import TimeStatus from "./Time/TimeStatus";
import VolumeStatus from "./Volume/VolumeStatus";
import WindowTitle from "./WindowTitle/WindowTitle";
import Workspaces from "./Workspaces/Workspaces";

const providers = zebar.createProviderGroup({
  glazewm: { type: "glazewm" },
  systray: { type: "systray" },
  keyboard: { type: "keyboard" },
  cpu: { type: "cpu", refreshInterval: 5000 },
  memory: { type: "memory", refreshInterval: 5000 },
  network: { type: "network", refreshInterval: 5000 },
  audio: { type: "audio" },
  battery: { type: "battery", refreshInterval: 10000 },
  date: { type: "date", formatting: "EEE MMM d HH:mm" },
  media: { type: "media" },
});

render(() => <App />, document.getElementById("root")!);

function App() {
  const [output, setOutput] = createStore(providers.outputMap);

  providers.onOutput((outputMap) => setOutput(outputMap));

  return (
    <div class="app">
      <div class="left">
        <WindowsButton glazewm={output.glazewm} />
        {/* <SearchButton glazewm={output.glazewm} /> */}
        <Workspaces glazewm={output.glazewm} />
        {/* <TilingBinding glazewm={output.glazewm} /> */}
        <MediaStatus media={output.media} />
      </div>
      <div class="center">
        <WindowTitle glazewm={output.glazewm} />
      </div>
      <div class="right">
        <Systray systray={output.systray} glazewm={output.glazewm} />
        <InputMethodStatus
          glazewm={output.glazewm}
          keyboard={output.keyboard}
        />
        <CpuStatus cpu={output.cpu} glazewm={output.glazewm} />
        <MemoryStatus memory={output.memory} />
        <NetworkStatus network={output.network} glazewm={output.glazewm} />
        <VolumeStatus audio={output.audio} glazewm={output.glazewm} />
        <BatteryStatus battery={output.battery} glazewm={output.glazewm} />
        <TimeStatus date={output.date} glazewm={output.glazewm} />
      </div>
    </div>
  );
}
