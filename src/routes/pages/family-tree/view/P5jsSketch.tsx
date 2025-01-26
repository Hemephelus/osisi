// @ts-nocheck
// import React from "react";

import { PanDraw, ZoomDraw, ZoomPanSetup } from "@/utils/ZoomPan";
import { useEffect } from "react";
import {
  P5CanvasInstance,
  P5WrapperClassName,
  ReactP5Wrapper,
} from "react-p5-wrapper";

interface FamilyData {
  data: {
    profile?: string[];
    parent?: string[];
    child?: string[];
    spouses?: string[];
  };
}

let profile: any[] = [];
let parent: any[] = [];
let child: any[] = [];
let spouse: any[] = [];
let id = "18d1158c551-309";
let pan = false;

function sketch(p5: P5CanvasInstance) {
  interface Node {
    pos: any;
    force: any;
    mass: number;
    fs: any[]; // Adjust the type according to your needs
    data: string[];
  }

  let noNodes = 30;
  let noConn = 10;
  let gravityConstant = 1.1;
  let forceConstant = 5000;
  let physics = true;

  let nodes: Node[] = [];
  let nodeCon = [];
  let clicked = false;
  let lerpValue = 0.2;
  let startDisMultiplier = 1;
  let closeNode;
  let closeNodeMag;
  let canvas;
  let checkbox;

  p5.setup = () => {
    let canvas = p5.createCanvas(window.innerWidth, window.innerHeight);
    canvas.position(0, 0);
    ZoomPanSetup(canvas, P5WrapperClassName);
    p5.fill(200);
    checkbox = p5.createCheckbox();
    let selectedProfile = profile.map(a => a)
    addProfile(selectedProfile)
  
    closeNode = nodes[0];

    createConnections(parent);
    createConnections(child);
    createConnections(spouse);
  };

  function addProfile(selectedProfile = []){
    for (let i = 0; i < selectedProfile.length; i++) {
      let x = p5.random(
        -startDisMultiplier * p5.width,
        startDisMultiplier * p5.width
      );
      let y = p5.random(
        -startDisMultiplier * p5.height,
        startDisMultiplier * p5.height
      );
      let node = new Node(p5.createVector(x, y), 3, 3, selectedProfile[i]);
      nodes.push(node);
    }
  }

  p5.draw = () => {
    p5.background(4, 12, 36);
    
    if (pan) {
      // PanDraw(p5);
    } else {
      p5.translate(p5.width / 2, p5.height / 2);
    }

    nodeCon.forEach((con) => {
      let node1 = nodes[con[0]];
      let node2 = nodes[con[1]];
      p5.stroke(58, 76, 122);
      p5.line(node1.pos.x, node1.pos.y, node2.pos.x, node2.pos.y);
    });
    applyForces(nodes);
    nodes.forEach((node) => {
      node.draw();
      if (physics) {
        node.update();
      }
    });
    if (clicked == true) {
      let mousePos = p5.createVector(
        p5.mouseX - p5.width / 2,
        p5.mouseY - p5.height / 2
      );
      closeNode.pos.lerp(mousePos, lerpValue);
      if (lerpValue < 0.95) {
        lerpValue += 0.02;
      }
    }
  };

  function applyForces(nodes) {
    // apply force towards centre
    nodes.forEach((node) => {
      let gravity = node.pos.copy().mult(-1).mult(gravityConstant);
      node.force = gravity;
    });

    // apply repulsive force between nodes
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        let pos = nodes[i].pos;
        let dir = nodes[j].pos.copy().sub(pos);
        let force = dir.div(dir.mag() * dir.mag());
        force.mult(forceConstant);
        nodes[i].force.add(force.copy().mult(-1));
        nodes[j].force.add(force);
      }
    }

    // apply forces applied by connections
    nodeCon.forEach((con) => {
      let node1 = nodes[con[0]];
      let node2 = nodes[con[1]];
      let maxDis = con[2];
      let dis = node1.pos.copy().sub(node2.pos);
      let diff = dis.mag() - maxDis;
      node1.force.sub(dis);
      node2.force.add(dis);
    });
  }

  p5.windowResized = () => {
    p5.resizeCanvas(window.innerWidth, window.innerHeight);
  };

  function Node(
    this: Node,
    pos = p5.createVector(0, 0),
    size: number,
    r: number,
    data: string[] = []
  ) {
    this.pos = pos;
    this.force = p5.createVector(0, 0);
    this.mass = (2 * p5.PI * size) / 1.5;
    this.r = r;
    this.fs = [];
    this.data = data;
  }

  Node.prototype.update = function () {
    let force = this.force.copy();
    let vel = force.copy().div(this.mass);
    this.pos.add(vel);
  };

  Node.prototype.draw = function () {
    // ellipse(this.pos.x, this.pos.y, this.mass, this.mass);
    p5.stroke(255, 215, 0);
    p5.fill(255, 215, 0);

    star(this.pos.x, this.pos.y, this.r, this.r * 3, 6);
    p5.noStroke();
    p5.fill(157, 165, 189);
    p5.text(this.data.first_name, this.pos.x, this.pos.y - 10);
  };

  p5.mousePressed = () => {
    clicked = true;
    let mousePos = p5.createVector(
      p5.mouseX - p5.width / 2,
      p5.mouseY - p5.height / 2
    );
    nodes.forEach((node) => {
      if (
        mousePos.copy().sub(node.pos).mag() - closeNode.mass / (2 * p5.PI) <
        mousePos.copy().sub(closeNode.pos).mag() - closeNode.mass / (2 * p5.PI)
      )
        closeNode = node;
    });
  };

  p5.mouseReleased = () => {
    clicked = false;
    lerpValue = 0.2;
  };

  function createConnections(relationships = []) {
    const profileIds = profile.map((a) => a.id);
    for (let n = 0; n < relationships.length; n++) {
      let [id1, id2] = Object.values(relationships[n]);
      nodeCon.push([profileIds.indexOf(id1), profileIds.indexOf(id2), 500]);
    }
  }

  function star(x, y, radius1, radius2, npoints) {
    let angle = p5.TWO_PI / npoints;
    let halfAngle = angle / 2.0;
    p5.beginShape();
    for (let a = 0; a < p5.TWO_PI; a += angle) {
      let sx = x + p5.cos(a) * radius2;
      let sy = y + p5.sin(a) * radius2;
      p5.vertex(sx, sy);
      sx = x + p5.cos(a + halfAngle) * radius1;
      sy = y + p5.sin(a + halfAngle) * radius1;
      p5.vertex(sx, sy);
    }
    p5.endShape(p5.CLOSE);
  }
}

export function P5jsSketch({ data = {}, member_id, panState, zoomScale }) {
  useEffect(() => {
    if (data) {
      profile = data.data?.profile || [];
      parent = data.data?.parent || [];
      child = data.data?.child || [];
      spouse = data.data?.spouses || [];
    }
  }, [data]);

  useEffect(() => {
    id = member_id;
    pan = panState;
  }, [member_id, panState]);

  return <ReactP5Wrapper sketch={sketch} />;
}
