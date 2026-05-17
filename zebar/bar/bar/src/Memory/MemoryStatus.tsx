import { Component } from "solid-js";
import type { MemoryOutput } from "zebar";
import "./style.css";

interface MemoryStatusProps {
  memory: MemoryOutput;
}

const MemoryStatus: Component<MemoryStatusProps> = (props) => {
  const getMemoryUsageRate = (usage: number) => {
    if (usage > 90) return "extreme-usage";
    else if (usage > 65) return "high-usage";
    else if (usage > 45) return "medium-usage";
    else return "low-usage";
  };

  return (
    <div
      classList={{
        memory: true,
        [getMemoryUsageRate(props.memory?.usage)]: true,
      }}
    >
      <span class="content">
        <span class="i-mem"></span>
        <div class="labels">
          <span class="label total">
            <span>USED</span>
            {Math.round(props.memory?.usedMemory / 1024 / 1024 / 1024)}G
          </span>
          <span class="label total">
            <span>TOT</span>
            {Math.round(props.memory?.totalMemory / 1024 / 1024 / 1024)}G
          </span>
        </div>
        <span class="mem-bar">{Math.round(props.memory?.usage)}%</span>
      </span>
    </div>
  );
};

export default MemoryStatus;
