import { fabric } from "fabric";

class Editor2d {
  constructor(container, options) {
    this.canvas = new fabric.Canvas(container, {
      backgroundColor: "#fff",
      width: options.width,
      height: options.height,
    });
    this.canvas.setZoom(0.118);

    this.bindEvents();

    this.loadSVG("/clo/pattern (1).svg");
  }

  bindEvents() {
    this.canvas.on("selected", (e) => {
      console.log("selected a canvas");
    });
    this.canvas.on("mouse:wheel", (opt) => {
      const delta = opt.e.deltaY;
      const zoom = this.canvas.getZoom();
      zoom *= 0.999 ** delta;
      if (zoom > 1) zoom = 1;
      if (zoom < 0.1) zoom = 0.1;
      this.canvas.setZoom(zoom);
      opt.e.preventDefault();
      opt.e.stopPropagation();
    });
  }

  loadSVG(url) {
    fabric.loadSVGFromURL(url, (objects, options) => {
      objects.forEach((obj) => {
        obj.fill = "#eee";
        // obj.selectable = false;
        // obj.evented = true;
        // obj.hasControls = false;
        obj.on("selected", () => {
          console.log("selected a obj");
        });
        this.canvas.add(obj);
      });
      // const obj = fabric.util.groupSVGElements(objects, options);
    });
  }
}

export { Editor2d };
