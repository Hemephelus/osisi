// @ts-nocheck
const controls = {
    view: {x: 0, y: 0, zoom: 1},
    viewPos: { prevX: null,  prevY: null,  isDragging: false },
  }

export function ZoomPanSetup(canvas,p5){
    canvas.mouseWheel(e => {Controls.zoom(controls,p5).worldZoom(e); })
}

export function ZoomDraw(p5){
    p5.scale(controls.view.zoom)
}
export function PanDraw(p5){    
    p5.translate(controls.view.x, controls.view.y);
    
  }
  
  /////////////////////////////////////////////////////////////////////
  
  window.mousePressed = e => Controls.move(controls,p5).mousePressed(e)
  window.mouseDragged = e => Controls.move(controls,p5).mouseDragged(e);
  window.mouseReleased = e => Controls.move(controls,p5).mouseReleased(e)


//////////////////////////////////////////////////////////////////////
class Controls {
  static move(controls) {
    mousePressed = (e) => {
      controls.viewPos.isDragging = true;
      controls.viewPos.prevX = e.clientX;
      controls.viewPos.prevY = e.clientY;
    }

    mouseDragged = (e) => {
      const {prevX, prevY, isDragging} = controls.viewPos;
      if(!isDragging) return;
      
      const pos = {x: e.clientX, y: e.clientY};
      const dx = pos.x - prevX;
      const dy = pos.y - prevY;
      
      if(prevX || prevY) {
        controls.view.x += dx;
        controls.view.y += dy;
        controls.viewPos.prevX = pos.x, controls.viewPos.prevY = pos.y
      }
    }
    
   
      mouseReleased = (e) => {
      controls.viewPos.isDragging = false;
      controls.viewPos.prevX = null;
      controls.viewPos.prevY = null;
    }
 
    return {
      mousePressed, 
      mouseDragged, 
      mouseReleased
    }
  }

  static zoom(controls,p5) {
    function calcPos(x, y, zoom) {
      const newX = p5.width - (p5.width * zoom - x);
      const newY = p5.height - (p5.height * zoom - y);
      return {x: newX, y: newY}
    }

    function worldZoom(e) {
      const {x, y, deltaY} = e;
      const direction = deltaY > 0 ? -1 : 1;
      const factor = 0.05;
      const zoom = 1 * direction * factor;
      const minZoom = 0.05
      
      const wx = (x-controls.view.x)/(p5.width*controls.view.zoom);
      const wy = (y-controls.view.y)/(p5.height*controls.view.zoom);
      
      controls.view.x -= wx*p5.width*zoom;
      controls.view.y -= wy*p5.height*zoom;

      controls.view.zoom += deltaY > 0 ? 0 : 0.001;
      if(controls.view.zoom <= minZoom){
        controls.view.zoom = minZoom
      }else{
        controls.view.zoom -= deltaY > 0 ? 0 : 0.001;
        controls.view.zoom += zoom;
      }

    }

    return {worldZoom}
  }
}
