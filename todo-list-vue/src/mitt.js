import mitt from "mitt";
export const emitter = mitt();

emitter.on("*", (type, e) => console.log(`# 이벤트 로그: ${type} -> ${e}`));
