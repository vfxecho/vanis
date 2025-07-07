  



window.timing = new Array(15).fill(0);
window.cellCount = 0;
window.initFps = function() {
  if (window.app && window.gameObj) {
    window.gameObj.ticker = {
      FPS: 60,
      add: function(callback) {
        this._callbacks = this._callbacks || [];
        this._callbacks.push(callback);
      },
      start: function() {
        if (this._running) return;
        this._running = true;
        this._lastTime = performance.now();
        this._frame = requestAnimationFrame(this._tick.bind(this));
      },
      stop: function() {
        if (!this._running) return;
        this._running = false;
        cancelAnimationFrame(this._frame);
      },
      _tick: function() {
        const now = performance.now();
        const delta = now - this._lastTime;
        this.FPS = 1000 / delta;
        this._lastTime = now;
        
        if (this._callbacks) {
          for (let i = 0; i < this._callbacks.length; i++) {
            this._callbacks[i](delta / 1000);
          }
        }
        
        if (this._running) {
          this._frame = requestAnimationFrame(this._tick.bind(this));
        }
      }
    };
    window.gameObj.ticker.start();
  } else {
    setTimeout(window.initFps, 100);
  }
};
window.initFps();
(function (_0x46d085) {
  function _0x4ce7e3(_0x1d220c) {
    var _0xe20dd2;
    var _0x52d944;
    var _0x257589 = _0x1d220c[0];  
    var _0x5f1aaf = _0x1d220c[1];
    var _0x4cc0d8 = _0x1d220c[2];
    var _0x5d3a9e = 0;
    for (var _0x58d4dd = []; _0x5d3a9e < _0x257589.length; _0x5d3a9e++) {
      _0x52d944 = _0x257589[_0x5d3a9e];
      if (Object.prototype.hasOwnProperty.call(_0x528743, _0x52d944) && _0x528743[_0x52d944]) {
        _0x58d4dd.push(_0x528743[_0x52d944][0]);
      }
      _0x528743[_0x52d944] = 0;
    }
    for (_0xe20dd2 in _0x5f1aaf) {
      if (Object.prototype.hasOwnProperty.call(_0x5f1aaf, _0xe20dd2)) {
        _0x46d085[_0xe20dd2] = _0x5f1aaf[_0xe20dd2];
      }
    }
    for (_0x3a053f && _0x3a053f(_0x1d220c); _0x58d4dd.length;) {
      _0x58d4dd.shift()();
    }
    _0x504c93.push.apply(_0x504c93, _0x4cc0d8 || []);
    return _0x29aad0();
  }
  function _0x29aad0() {
    var _0x1e723c;
    for (var _0x426ccd = 0; _0x426ccd < _0x504c93.length; _0x426ccd++) {
      var _0x5de394 = _0x504c93[_0x426ccd];
      var _0x2afd4d = true;
      for (var _0x491a02 = 1; _0x491a02 < _0x5de394.length; _0x491a02++) {
        var _0x4f4392 = _0x5de394[_0x491a02];
        if (_0x528743[_0x4f4392] !== 0) {
          _0x2afd4d = false;
        }
      }
      if (_0x2afd4d) {
        _0x504c93.splice(_0x426ccd--, 1);
        _0x1e723c = _0x3c5509(_0x3c5509.s = _0x5de394[0]);
      }
    }
    return _0x1e723c;
  }
  var _0x21c96c = {};
  var _0x528743 = {
    0: 0
  };
  var _0x504c93 = [];
  function _0x3c5509(_0x31cd2c) {
    if (_0x21c96c[_0x31cd2c]) {
      return _0x21c96c[_0x31cd2c].exports;
    }
    var _0x104863 = _0x21c96c[_0x31cd2c] = {
      i: _0x31cd2c,
      l: false,
      exports: {}
    };
    _0x46d085[_0x31cd2c].call(_0x104863.exports, _0x104863, _0x104863.exports, _0x3c5509);
    _0x104863.l = true;
    return _0x104863.exports;
  }
  _0x3c5509.m = _0x46d085;
  _0x3c5509.c = _0x21c96c;
  _0x3c5509.d = function (_0x20adad, _0x140250, _0x3c342c) {
    if (!_0x3c5509.o(_0x20adad, _0x140250)) {
      Object.defineProperty(_0x20adad, _0x140250, {
        enumerable: true,
        get: _0x3c342c
      });
    }
  };
  _0x3c5509.r = function (_0x5556e0) {
    if (typeof Symbol != "undefined" && Symbol.toStringTag) {
      Object.defineProperty(_0x5556e0, Symbol.toStringTag, {
        value: "Module"
      });
    }
    Object.defineProperty(_0x5556e0, "__esModule", {
      value: true
    });
  };
  _0x3c5509.t = function (_0x332106, _0xe0e99) {
    if (_0xe0e99 & 1) {
      _0x332106 = _0x3c5509(_0x332106);
    }
    if (_0xe0e99 & 8) {
      return _0x332106;
    }
    if (_0xe0e99 & 4 && typeof _0x332106 == "object" && _0x332106 && _0x332106.__esModule) {
      return _0x332106;
    }
    var _0x5021f1 = Object.create(null);
    _0x3c5509.r(_0x5021f1);
    Object.defineProperty(_0x5021f1, "default", {
      enumerable: true,
      value: _0x332106
    });
    if (_0xe0e99 & 2 && typeof _0x332106 != "string") {
      for (var _0x9b4551 in _0x332106) {
        _0x3c5509.d(_0x5021f1, _0x9b4551, function (_0x28795b) {
          return _0x332106[_0x28795b];
        }.bind(null, _0x9b4551));
      }
    }
    return _0x5021f1;
  };
  _0x3c5509.n = function (_0x735a8f) {
    var _0x1e69dc = _0x735a8f && _0x735a8f.__esModule ? function () {
      return _0x735a8f.default;
    } : function () {
      return _0x735a8f;
    };
    _0x3c5509.d(_0x1e69dc, "a", _0x1e69dc);
    return _0x1e69dc;
  };
  _0x3c5509.o = function (_0x58dcc2, _0x5c1c02) {
    return Object.prototype.hasOwnProperty.call(_0x58dcc2, _0x5c1c02);
  };
  _0x3c5509.p = "";
  var _0x229851 = window.webpackJsonp = window.webpackJsonp || [];
  var _0x3a053f = _0x229851.push.bind(_0x229851);
  _0x229851.push = _0x4ce7e3;
  _0x229851 = _0x229851.slice();
  for (var _0x39066a = 0; _0x39066a < _0x229851.length; _0x39066a++) {
    _0x4ce7e3(_0x229851[_0x39066a]);
  }
  _0x504c93.push([117, 1]);
  _0x29aad0();
})([, function (_0x418b16, _0x55a197, _0x5cd6b2) {
  var _0x4fdc37 = _0x5cd6b2(128);
  var _0x29f68e = _0x5cd6b2(6);
  var _0x48159f = _0x5cd6b2(58);
  var _0x41fc9b = _0x5cd6b2(129);
  var _0x3baf6a = _0x5cd6b2(130);
  var _0x4eb0e7 = _0x5cd6b2(132);
  var _0x3ea42c = _0x5cd6b2(13);
  var _0x586504 = _0x5cd6b2(137);
  var _0x3660c9 = _0x5cd6b2(23);
  var _0x1045aa = _0x5cd6b2(73);
  var _0x6c286 = _0x5cd6b2(7);
  var _0x27b6d2 = _0x5cd6b2(138);
  var _0x217a93 = _0x5cd6b2(74);
  var _0x2edc99 = _0x5cd6b2(140);
  var _0x609f66 = {};
  function _0xaa94d9(_0xe4d88c) {
    var _0x465d8a = encodeURIComponent(document.getElementById("nickname").value);
    var _0x2e02e4 = document.getElementById("skinurl").value;
    var _0x570060 = document.getElementById("teamtag").value;
    _0xe4d88c.utf8(_0x465d8a);
    _0xe4d88c.utf8(_0x2e02e4);
    _0xe4d88c.utf8(_0x570060);
  }
  _0x609f66.clientVersion = 4;
  _0x609f66.events = new _0x3660c9();
  _0x609f66.settings = _0x29f68e;
  _0x609f66.renderer = _0x48159f;
  _0x609f66.usingWebGL = _0x48159f.type === PIXI.RENDERER_TYPE.WEBGL;
  _0x609f66.skinLoader = new _0x27b6d2();
  console.log(_0x609f66.usingWebGL ? "WebGL Renderer" : "Canvas Renderer");
  _0x609f66.state = {
    connectionUrl: null,
    isAlive: false,
    playButton: false,
    loadingAds: false
  };
    window.gameObj = _0x609f66;
  _0x217a93.loadAdinplay(_0x217a93.loadMenuAds);
  document.body.oncontextmenu = function (_0x3c3d35) {
    return _0x3c3d35.target && _0x3c3d35.target.id === "email";
  };
  if (_0x609f66.usingWebGL && _0x29f68e.showBackgroundImage && _0x29f68e.backgroundImageUrl) {
    PIXI.Texture.from(_0x29f68e.backgroundImageUrl);
  }
  _0x609f66.start = function (_0x11b163) {
    if (!(_0x11b163.protocol && _0x11b163.instanceSeed && _0x11b163.playerId && _0x11b163.border)) {
      throw "Lacking mandatory data";
    }
    _0x609f66.running = true;
    _0x609f66.protocol = _0x11b163.protocol;
    _0x609f66.modeId = _0x11b163.gameModeId || 0;
    _0x609f66.instanceSeed = _0x11b163.instanceSeed;
    _0x609f66.pingstamp = 0;
    _0x609f66.timestamp = 0;
    _0x609f66.deltaTime = 0;
    _0x609f66.playerId = _0x11b163.playerId;
    _0x609f66.multiboxPid = null;
    _0x609f66.activePid = _0x609f66.playerId;
    _0x609f66.tagId = null;
    _0x609f66.spectating = false;
    _0x609f66.state.isAlive = false;
    _0x609f66.center = {
      x: 0,
      y: 0
    };
    _0x609f66.score = 0;
    _0x609f66.splitCount = 0;
    _0x609f66.moveWaitUntil = 0;
    _0x609f66.replaying = !!_0x11b163.replayUpdates;
    _0x609f66.replayUpdates = _0x11b163.replayUpdates;
    _0x609f66.replayUpdateIndex = 0;
    _0x609f66.replay.updateHistory.length = 0;
    _0x609f66.nodes = {};
    _0x609f66.nodelist = [];
    _0x609f66.removedNodes = [];
    _0x609f66.rawMouse = {};
    _0x609f66.mouse = {};
    _0x609f66.stopMovePackets = false;
    _0x609f66.moveToCenterOfCells = false;
    _0x609f66.border = _0x11b163.border;
    _0x609f66.setupZoom(_0x609f66.border);
    _0x4eb0e7.createMassFont();
    _0x609f66.massTextPool = [];
    _0x609f66.crownPool = [];
    var _0x5b4eca = _0x29f68e.showBackgroundImage;
    _0x609f66.scene = new _0x41fc9b(_0x609f66.border, _0x5b4eca);
    _0x609f66.container = _0x609f66.scene.container;
    _0x609f66.cameraScale = _0x609f66.zoom;
    _0x609f66.camera = new _0x4fdc37(_0x609f66.container);
    _0x609f66.camera.scale.set(_0x609f66.cameraScale);
    _0x609f66.camera.position.set(0);
    _0x586504.prepareMode(_0x609f66, _0x609f66.modeId);
    _0x609f66.playerManager = new _0x3baf6a(_0x609f66);
    _0x609f66.ticker = new PIXI.Ticker();
    _0x609f66.ticker.add(_0x609f66.tick);
    if (_0x609f66.replaying) {
      _0x609f66.moveInterval = // TOLOOK
      setInterval(_0x609f66.replayUpdate, 40);
      _0x609f66.events.$emit("show-replay-controls", _0x609f66.replayUpdates.length);
    } else {
      if (_0x29f68e.minimapEnabled) {
        _0x609f66.events.$emit("minimap-show");
      }
      if (_0x29f68e.showChat) {
        _0x609f66.events.$emit("chat-visible", true);
      }
      _0x609f66.events.$emit("leaderboard-show");
      _0x609f66.events.$emit("stats-visible", true);
      _0x609f66.moveInterval = // TOLOOK
      setInterval(() => {
        if (!_0x609f66.stopMovePackets) {
          if (_0x609f66.moveToCenterOfCells) {
            _0x609f66.sendUint8(9);
          } else {
            _0x609f66.actions.move();
          }
        }
      }, 40);
      _0x609f66.setupStats();
      _0x609f66.state.playButton = true;
    }
    _0x609f66.ticker.start();
    _0x609f66.eventListeners(true);
  };
  _0x609f66.setupZoom = function (_0x20cadf) {
    _0x609f66.zoom = 0.3;
    if (_0x20cadf.width === _0x20cadf.height) {
      _0x609f66.zoomScale = 20000 / _0x20cadf.width;
    } else {
      _0x609f66.zoomScale = 1;
    }
    _0x609f66.zoomMin = _0x609f66.zoomScale * 0.03;
  };
  _0x609f66.nextReplayPacket = function () {
    var _0x45e7ad = _0x609f66.replayUpdateIndex;
    var _0xc5b8c1 = _0x609f66.replayUpdates[_0x45e7ad];
    _0x609f66.parseMessage(_0xc5b8c1);
    _0x609f66.replayUpdateIndex++;
  };
  _0x609f66.replayMoveTo = function (_0x468a43) {
    var _0xa9cb39 = _0x609f66.replayUpdates.length - 1;
    var _0x22d509 = Math.floor(_0x468a43 * _0xa9cb39);
    _0x609f66.replayUpdateIndex = _0x22d509;
    _0x609f66.nextReplayPacket();
    var _0x483dbf = _0x609f66.timestamp;
    var _0x41978f = [];
    for (var _0x88c368 = 0; _0x88c368 < _0x609f66.nodelist.length; _0x88c368++) {
      var _0x5c93eb = _0x609f66.nodelist[_0x88c368];
      if (_0x5c93eb.updateTime !== _0x483dbf) {
        _0x41978f.push(_0x5c93eb);
      }
    }
    for (var _0x411766 = 0; _0x411766 < _0x41978f.length; _0x411766++) {
      _0x41978f[_0x411766].destroy();
    }
    return _0x22d509;
  };
  _0x609f66.replayUpdate = function () {
    if (_0x609f66.replayUpdateIndex >= _0x609f66.replayUpdates.length) {
      _0x609f66.clearNodes();
      _0x609f66.replayUpdateIndex = 0;
    }
    _0x609f66.events.$emit("replay-index-change", _0x609f66.replayUpdateIndex);
    _0x609f66.nextReplayPacket();
  };
  _0x609f66.updateStats = function (_0x929163) {
    var _0x4240d0 = _0x609f66.score;
    var _0x1d7149 = 0;
    
    // Make sure we have valid FPS data
    if (_0x609f66.avgFps && typeof _0x609f66.avgFps.getAndReset === 'function') {
      _0x1d7149 = Math.round(_0x609f66.avgFps.getAndReset());
    } else if (window.gameObj && window.gameObj.ticker) {
      _0x1d7149 = Math.round(window.gameObj.ticker.FPS);
    }
    
    // Send the stats update
    _0x609f66.events.$emit("stats-changed", {
      ping: _0x929163,
      fps: _0x1d7149,
      mass: _0x4240d0
    });
    
    // Update global FPS for direct access
    window.currentFps = _0x1d7149;
  };
  _0x609f66.setupStats = function () {
    _0x609f66.avgFps = new _0x2edc99();
    
    // Make sure we have a ticker with FPS tracking
    if (!_0x609f66.ticker || typeof _0x609f66.ticker.FPS === 'undefined') {
      _0x609f66.ticker = window.gameObj.ticker;
    }
    
    _0x609f66.ticker.add(() => {
      _0x609f66.avgFps.add(_0x609f66.ticker.FPS);
    });
    
    _0x609f66.everySecond = setInterval(() => {
      if (window.app.showMenu || window.app.showDeathScreen) {
        _0x609f66.updateStats(null);
      } else {
        _0x609f66.ping();
      }
    }, 1000);
  };
  _0x609f66.clearNodes = function () {
    for (; _0x609f66.nodelist.length;) {
      _0x609f66.nodelist[0].destroy();
    }
    for (; _0x609f66.removedNodes.length;) {
      _0x609f66.removedNodes.pop().destroySprite();
    }
  };
  _0x609f66.destroySpritePool = function (_0x4bbed4, _0x4a5a83) {
    for (; _0x4bbed4.length;) {
      _0x4bbed4.pop().destroy(_0x4a5a83);
    }
  };
  _0x609f66.stop = function () {
    _0x609f66.running = false;
    _0x609f66.state.playButton = false;
    _0x609f66.eventListeners(false);
    _0x609f66.state.connectionUrl = null;
    _0x609f66.ticker.stop();
    clearInterval(_0x609f66.moveInterval);
    clearInterval(_0x609f66.everySecond);
    _0x609f66.renderer.clear();
    _0x609f66.playerManager.destroy();
    _0x609f66.skinLoader.clearCallbacks();
    _0x609f66.events.$emit("stats-visible", false);
    _0x609f66.events.$emit("chat-visible", false);
    _0x609f66.events.$emit("leaderboard-hide");
    _0x609f66.events.$emit("minimap-hide");
    _0x609f66.events.$emit("minimap-destroy");
    _0x609f66.events.$emit("show-replay-controls", false);
    _0x609f66.clearNodes();
    if (_0x609f66.scene) {
      _0x609f66.scene.destroyBackgroundImage(false);
    }
    _0x609f66.container.destroy(true);
    _0x3ea42c.cells.destroyCache();
    _0x609f66.destroySpritePool(_0x609f66.massTextPool, true);
    _0x609f66.destroySpritePool(_0x609f66.crownPool);
  };
  _0x609f66.showMenu = function (_0x484c57, _0x13c97b) {
    if (window.app.showDeathScreen) {
      return false;
    }
    window.app.showMenu = _0x484c57;
    _0x609f66.actions.stopMovement(_0x484c57);
    if (_0x484c57) {
      if (_0x13c97b) {
        _0x217a93.loadMenuAds();
      }
    } else {
      var _0x4a032e = document.activeElement;
      if (!(_0x4a032e && _0x4a032e.id === "chatbox-input")) {
        _0x609f66.renderer.view.focus();
      }
      _0x609f66.stopMovePackets = false;
    }
    return _0x484c57;
  };
  _0x609f66.toggleMenu = function () {
    var _0x142637 = !window.app.showMenu;
    _0x609f66.showMenu(_0x142637, true);
  };
  _0x609f66.showDeathScreen = function (_0x1c0124) {
    window.app.showDeathScreen = _0x1c0124;
  };
  _0x609f66.setDeathStats = function (_0x400f65) {
    window.app.deathStats = _0x400f65;
  };
  _0x609f66.tick = function (_0x4610d8) {
    _0x609f66.timestamp = Date.now();
    _0x609f66.deltaTime = _0x4610d8;
    for (var _0x2b0de4 = _0x609f66.removedNodes.length; _0x2b0de4--;) {
      var _0x54adbc = _0x609f66.removedNodes[_0x2b0de4];
      if (_0x54adbc.update()) {
        _0x54adbc.destroySprite();
        _0x609f66.removedNodes.splice(_0x2b0de4, 1);
      }
    }
    var _0x5ce08c = _0x609f66.playerId;
    var _0x3e54a2 = _0x609f66.multiboxPid;
    var _0x124b5d = _0x609f66.nodelist;
    var _0x59697b = 0;
    var _0x283714 = 0;
    var _0x19cd89 = 0;
    var _0x6bf26c = 0;
    for (var _0x2c2839 = 0; _0x2c2839 < _0x124b5d.length; _0x2c2839++) {
      var _0x3a0862 = _0x124b5d[_0x2c2839];
      _0x3a0862.update();
      if (_0x3a0862.pid === _0x5ce08c || _0x3a0862.pid === _0x3e54a2) {
        var _0x528477 = _0x3a0862.getMass();
        _0x59697b += _0x3a0862.x * _0x528477;
        _0x283714 += _0x3a0862.y * _0x528477;
        _0x19cd89 += _0x528477;
        _0x6bf26c += _0x3a0862.nSize;
      }
    }
    _0x609f66.scene.sort();
    if (_0x609f66.spectating) {
      _0x59697b = _0x609f66.center.x;
      _0x283714 = _0x609f66.center.y;
      _0x609f66.score = 0;
    } else {
      if (!_0x19cd89) {
        _0x609f66.renderer.render(_0x609f66.container);
        _0x609f66.score = 0;
        return;
      }
      _0x59697b /= _0x19cd89;
      _0x283714 /= _0x19cd89;
      _0x609f66.score = _0x19cd89;
    }
    var _0x209af6 = _0x29f68e.cameraMoveSmoothing * _0x609f66.deltaTime;
    _0x609f66.camera.position.x = lerp(_0x609f66.camera.position.x, _0x59697b, _0x209af6);
    _0x609f66.camera.position.y = lerp(_0x609f66.camera.position.y, _0x283714, _0x209af6);
    if (_0x609f66.timestamp >= _0x609f66.moveWaitUntil) {
      _0x609f66.updateMouse();
      _0x609f66.splitCount = 0;
    }
    if (_0x29f68e.autoZoom) {
      var _0x4c36ba = Math.min(64 / _0x6bf26c, 1);
      _0x609f66.cameraScale = _0x609f66.zoom * Math.pow(_0x4c36ba, 0.27);
    } else {
      _0x609f66.cameraScale = _0x609f66.zoom;
    }
    var _0x4a88dd = lerp(_0x609f66.camera.scale.x, _0x609f66.cameraScale, _0x29f68e.cameraZoomSmoothing * _0x609f66.deltaTime);
    _0x609f66.camera.scale.set(_0x4a88dd);
    _0x609f66.renderer.render(_0x609f66.container);
  };
  _0x609f66.updateMouse = function () {
    var _0x606408 = _0x609f66.rawMouse.x;
    var _0x1a026c = _0x609f66.rawMouse.y;
    var _0x14db84 = 1 / _0x609f66.camera.scale.x;
    var _0x5d58c9 = 1 / _0x609f66.camera.scale.y;
    var _0x58955d = _0x609f66.container;
    _0x609f66.mouse.x = _0x58955d.pivot.x + (_0x606408 - window.innerWidth / 2) * _0x14db84;
    _0x609f66.mouse.y = _0x58955d.pivot.y + (_0x1a026c - window.innerHeight / 2) * _0x5d58c9;
  };
  _0x609f66.joinGame = function (_0x5489c4, _0x35810d) {
    var _0x396735 = new _0x1045aa();
    _0x396735.uint8(1);
    _0xaa94d9(_0x396735);
    var _0x22a672 = _0x396735.write();
    _0x609f66.send(_0x22a672);
    _0x609f66.spectating = false;
  };
  _0x609f66.sendJoinData = function (_0x57ccc0) {
    if (!(_0x57ccc0 && _0x57ccc0.length === 16)) {
      _0x57ccc0 = new Uint8Array(new ArrayBuffer(16));
    }
    var _0x2e401b = new _0x1045aa();
    _0x2e401b.uint8(5);
    _0x2e401b.uint8(_0x609f66.clientVersion);
    _0x2e401b.uint8Array(_0x57ccc0);
    _0xaa94d9(_0x2e401b);
    var _0x5f7606 = localStorage.vanisToken;
    if (_0x5f7606) {
      _0x2e401b.utf8(_0x5f7606);
    }
    var _0x3423a6 = _0x2e401b.write();
    _0x609f66.send(_0x3423a6);
  };
  _0x609f66.seededRandom = function (_0x51383e) {
    var _0x54a230 = 10000 + _0x609f66.instanceSeed;
    var _0x396638 = Math.sin(_0x51383e) * _0x54a230;
    return _0x396638 - Math.floor(_0x396638);
  };
  _0x609f66.getThumbnail = function () {
    var _0x2e9072 = _0x609f66.container;
    var _0x27611d = new PIXI.Container();
    _0x27611d.pivot.x = _0x2e9072.position.x;
    _0x27611d.pivot.y = _0x2e9072.position.y;
    _0x27611d.position.x = 120;
    _0x27611d.position.y = 67.5;
    _0x27611d.scale.set(0.25);
    _0x27611d.addChild(_0x2e9072);
    var _0x1f03ff = PIXI.RenderTexture.create(240, 135);
    _0x609f66.renderer.render(_0x27611d, _0x1f03ff);
    _0x27611d.removeChild(_0x2e9072);
    var _0x6e660d = _0x609f66.renderer.extract.canvas(_0x1f03ff);
    var _0x2f2907 = document.createElement("canvas");
    _0x2f2907.width = 240;
    _0x2f2907.height = 135;
    var _0xc7f07 = _0x2f2907.getContext("2d");
    _0xc7f07.beginPath();
    _0xc7f07.rect(0, 0, 240, 135);
    _0xc7f07.fillStyle = _0x29f68e.backgroundColor;
    _0xc7f07.fill();
    _0xc7f07.drawImage(_0x6e660d, 0, 0, 240, 135);
    var _0x26a708 = _0x2f2907.toDataURL();
    _0x1f03ff.destroy(true);
    return _0x26a708;
  };
  _0x609f66.sendChatMessage = function (_0x15d6af) {
    var _0x81bd0f = encodeURIComponent(_0x15d6af);
    var _0x45f68e = [99];
    for (var _0x368062 = 0; _0x368062 < _0x81bd0f.length; _0x368062++) {
      _0x45f68e.push(_0x81bd0f.charCodeAt(_0x368062));
    }
    var _0x5472c4 = new Uint8Array(_0x45f68e).buffer;
    _0x609f66.send(_0x5472c4);
  };
  _0x609f66.addServerMessage = function (_0x500b0f) {
    _0x609f66.events.$emit("chat-message", {
      text: _0x500b0f,
      textColor: "#828282"
    });
  };
  _0x609f66.setTagId = function (_0x44ea42) {
    if (!_0x44ea42) {
      _0x44ea42 = null;
    }
    return _0x44ea42 !== _0x609f66.tagId && (_0x609f66.tagId = _0x44ea42, true);
  };
  _0x609f66.levelUp = function (_0x364244) {
    _0x6c286.toast.fire({
      title: "You have reached level " + _0x364244 + "!",
      background: "#b37211",
      timer: 3000
    });
  };
  _0x609f66.getShortMass = function (_0x4a70fb) {
    if (_0x4a70fb < 1000) {
      return _0x4a70fb.toString();
    } else {
      return (Math.round(_0x4a70fb * 0.001 * 10) / 10).toFixed(1) + "k";
    }
  };
  _0x418b16.exports = _0x609f66;
},,,,, function (_0x4c8831, _0x396255) {
  var _0x50429b = {
    skinsEnabled: true,
    namesEnabled: true,
    foodVisible: true,
    showMass: true,
    shortMass: true,
    showLocations: false,
    useWebGL: true,
    spawnTransparency: true,
    drawDelay: 120,
    cameraMoveSmoothing: 0.13,
    cameraZoomSmoothing: 0.14,
    cameraZoomSpeed: 10,
    eatAnimation: true,
    rememberEjecting: false,
    doubleResolution: true,
    cellBorderSize: 1,
    autoZoom: true,
    showChat: true,
    autoHideReplayControls: false,
    showHud: true,
    minimapEnabled: true,
    minimapSize: 220,
    minimapFPS: 30,
    minimapSmoothing: 0.08,
    minimapLocations: true,
    showBackgroundImage: true,
    backgroundImageUrl: "https://vanis.fun/beta/img/background.png",
    backgroundImageRepeat: true,
    backgroundImageOpacity: 0.9,
    backgroundColor: "#101010",
    backgroundDefaultIfUnequal: true
  };
  var _0x39b31c = {
    backgroundColor: function (_0x4e4161) {
      return /^#[0-9A-F]{6}$/i.test(_0x4e4161);
    }
  };
  _0x4c8831.exports = window.settings = new class {
    constructor() {
      this.getInternalSettings();
      this.userDefinedSettings = this.loadUserDefinedSettings();
      Object.assign(this, _0x50429b, this.userDefinedSettings);
    }
    getInternalSettings() {
      this.cellSize = 512;
      this.cellNamePadding = 350;
      this.cellRenderSize = this.cellSize + this.cellNamePadding;
      this.cellScaleRatio = this.cellRenderSize / this.cellSize;
    }
    loadUserDefinedSettings() {
      if (localStorage.settings) {
        try {
          return JSON.parse(localStorage.settings);
        } catch (_0x597f28) {
          console.error("loadUserDefinedSettings:", _0x597f28.message);
        }
      }
      return {};
    }
    set(_0x4bac01, _0x5c7d32) {
      if (this[_0x4bac01] === _0x5c7d32) {
        return false;
      }
      var _0x2eb18b = _0x39b31c[_0x4bac01];
      if (_0x2eb18b && !_0x2eb18b(_0x5c7d32)) {
        return false;
      }
      this[_0x4bac01] = _0x5c7d32;
      this.userDefinedSettings[_0x4bac01] = _0x5c7d32;
      localStorage.settings = JSON.stringify(this.userDefinedSettings);
      return true;
    }
  }();
}, function (_0x23f466, _0x8ac550, _0x303c5b) {
  var _0x112706 = _0x303c5b(267).default;
  var _0x1906d0 = _0x112706.mixin({
    toast: true,
    position: "top",
    showConfirmButton: false,
    showCloseButton: true
  });
  window.Swal = _0x112706;
  _0x23f466.exports = {
    toast: _0x1906d0,
    alert: function (_0xc2a24a) {
      _0x112706.fire({
        text: _0xc2a24a,
        confirmButtonText: "OK"
      });
    },
    confirm: function (_0x10eba8, _0x66de6b) {
      var _0x1c095c = {
        text: _0x10eba8,
        showCancelButton: true,
        confirmButtonText: "Continue"
      };
      _0x112706.fire(_0x1c095c).then(_0x5ea269 => {
        if (_0x5ea269.value) {
          _0x66de6b();
        }
      });
    },
    instance: _0x112706
  };
},,,,,, function (_0x1a8757, _0x3a6eed, _0xd5eab7) {
  var _0x34992e = _0xd5eab7(135);
  var _0x3947c6 = _0xd5eab7(136);
  _0x1a8757.exports = {
    cells: _0x34992e,
    virus: _0x3947c6
  };
},, function (_0x30685f, _0x44bc42, _0x171e3f) {
  (function (_0x2f6416) {
    _0x2f6416.prepareData = function (_0x563f97) {
      return new DataView(new ArrayBuffer(_0x563f97));
    };
    Number.prototype.clamp = function (_0x21272e, _0x51a4d9) {
      return Math.min(Math.max(this, _0x21272e), _0x51a4d9);
    };
    _0x2f6416.lerp = function (_0x6bf5a1, _0x3ceff6, _0x1a94b6) {
      return (1 - _0x1a94b6) * _0x6bf5a1 + _0x1a94b6 * _0x3ceff6;
    };
    _0x2f6416.htmlEncode = function (_0x2e9a41) {
      return _0x2e9a41 = _0x2e9a41.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/'/g, "&apos;").replace(/"/g, "&quot;");
    };
    _0x30685f.exports = {
      getTimestamp: function () {
        var _0x306ef6 = new Date();
        var _0x288d15 = _0x306ef6.getMonth() + 1;
        var _0x415ea6 = _0x306ef6.getDate();
        return [_0x306ef6.getFullYear(), (_0x288d15 > 9 ? "" : "0") + _0x288d15, (_0x415ea6 > 9 ? "" : "0") + _0x415ea6].join("") + "-" + [("0" + _0x306ef6.getHours()).slice(-2), ("0" + _0x306ef6.getMinutes()).slice(-2), ("0" + _0x306ef6.getSeconds()).slice(-2)].join("");
      },
      loadImage: function (url) {
        return fetch(url, {
          mode: "cors"
        }).then(response => response.blob()).then(blob => createImageBitmap(blob));
      },
      destroyPixiPlugins: function (app) {
        ["interaction", "accessibility"].forEach(plugin => {
          var instance = app.plugins[plugin];
          if (instance) {
            instance.destroy();
            delete app.plugins[plugin];
          }
        });
      }
    };
  }).call(this, _0x171e3f(4));
}, function (_0x28ff17, _0x56f992, _0x341490) {
  var _0x39c979 = _0x341490(1);
  var _0x3ccafd = _0x341490(13);
  _0x341490(6);
  _0x28ff17.exports = class {
    constructor(config) {
      this.game = _0x39c979;
      this.id = config.id || 0;
      this.oSize = this.size = config.size;
      this.updateTime = 0;
      this.newPositionScale = 1;
      this.removed = false;
      this.texture = config.texture || _0x3ccafd.cells.getTexture(0);
      this.sprite = new PIXI.Sprite(this.texture);
      this.sprite.anchor.set(0.5);
      this.sprite.gameData = this;
      this.x = this.ox = this.sprite.position.x = config.x;
      this.y = this.oy = this.sprite.position.y = config.y;
    }

    getMass() {
      return Math.floor(this.nSize * this.nSize / 100);
    }

    update() {
      if (this.pid && this.updateTime - this.game.updateTime > 10) {
        return this.destroy();
      }

      const drawDelay = this.game.settings.drawDelay;
      let progress = (this.game.timestamp - this.updateTime) / drawDelay;
      progress = progress < 0 ? 0 : progress > 1 ? 1 : progress;

      if (this.removed && (progress >= 1 || this.texture.clearedFromCache)) {
        return true;
      }

      this.size = progress * (this.nSize - this.oSize) + this.oSize;
      this.sprite.width = this.sprite.height = this.size * 2;
      this.sprite.position.x = this.x = progress * this.newPositionScale * (this.nx - this.ox) + this.ox;
      this.sprite.position.y = this.y = progress * this.newPositionScale * (this.ny - this.oy) + this.oy;

      if (this.onUpdate) {
        this.onUpdate();
      }
    }

    destroy(keepForAnimation) {
      if (this.removed) {
        console.warn("Cell already removed!");
        return;
      }

      if (this.onDestroy) {
        this.onDestroy();
      }

      const nodeList = this.game.nodelist;
      const index = nodeList.indexOf(this);
      if (index >= 0) {
        nodeList.splice(index, 1);
      }

      delete this.game.nodes[this.id];
      this.removed = true;

      if (keepForAnimation) {
        this.game.removedNodes.push(this);
      } else {
        this.destroySprite();
      }
    }

    destroySprite() {
      if (this.sprite) {
        this.sprite.destroy();
        this.sprite = null;
      } else {
        console.warn("Sprite already destroyed!");
      }
    }
  };
},,,,,,,,,,,,, function (_0x2d4d02, _0x4ca5c7, _0x3ce402) {
  var _0x58ff80 = _0x3ce402(2);
  var _0x34ac03 = _0x3ce402(179);
  if (typeof (_0x34ac03 = _0x34ac03.__esModule ? _0x34ac03.default : _0x34ac03) == "string") {
    _0x34ac03 = [[_0x2d4d02.i, _0x34ac03, ""]];
  }
  var _0x2bdf24 = {
    insert: "head",
    singleton: false
  };
  _0x58ff80(_0x34ac03, _0x2bdf24);
  var _0x54b451 = _0x34ac03.locals ? _0x34ac03.locals : {};
  _0x2d4d02.exports = _0x54b451;
}, function (_0x1bcc7e, _0x1688aa, _0x229d22) {
  'use strict';

  var _0x4de3f4 = _0x229d22(31);
  var _0x58ff7a = _0x229d22.n(_0x4de3f4);
  _0x1688aa.default = _0x58ff7a.a;
}, function (_0x2617f1, _0x154c5e) {
  _0x2617f1.exports = {
    data: () => ({})
  };
}, function (_0x4162aa, _0xc9695, _0x541128) {
  var _0x427bb8 = _0x541128(2);
  var _0xf72adc = _0x541128(181);
  if (typeof (_0xf72adc = _0xf72adc.__esModule ? _0xf72adc.default : _0xf72adc) == "string") {
    _0xf72adc = [[_0x4162aa.i, _0xf72adc, ""]];
  }
  var _0x3dfac1 = {
    insert: "head",
    singleton: false
  };
  _0x427bb8(_0xf72adc, _0x3dfac1);
  var _0x5a8d55 = _0xf72adc.locals ? _0xf72adc.locals : {};
  _0x4162aa.exports = _0x5a8d55;
}, function (_0x16aee8, _0x4a2225, _0x157ca2) {
  var _0x1a87cd = _0x157ca2(2);
  var _0x45c3dd = _0x157ca2(184);
  if (typeof (_0x45c3dd = _0x45c3dd.__esModule ? _0x45c3dd.default : _0x45c3dd) == "string") {
    _0x45c3dd = [[_0x16aee8.i, _0x45c3dd, ""]];
  }
  var _0x3f97a3 = {
    insert: "head",
    singleton: false
  };
  _0x1a87cd(_0x45c3dd, _0x3f97a3);
  var _0x4f537d = _0x45c3dd.locals ? _0x45c3dd.locals : {};
  _0x16aee8.exports = _0x4f537d;
}, function (_0x2d9593, _0x4c300a, _0x2f5cd0) {
  var _0x4ca999 = _0x2f5cd0(2);
  var _0x801f2c = _0x2f5cd0(186);
  if (typeof (_0x801f2c = _0x801f2c.__esModule ? _0x801f2c.default : _0x801f2c) == "string") {
    _0x801f2c = [[_0x2d9593.i, _0x801f2c, ""]];
  }
  var _0x5631ab = {
    insert: "head",
    singleton: false
  };
  _0x4ca999(_0x801f2c, _0x5631ab);
  var _0x3a5638 = _0x801f2c.locals ? _0x801f2c.locals : {};
  _0x2d9593.exports = _0x3a5638;
}, function (_0x22573c, _0x59006b, _0x237480) {
  'use strict';

  var _0x388c51 = _0x237480(36);
  var _0x5692fe = _0x237480.n(_0x388c51);
  _0x59006b.default = _0x5692fe.a;
}, function (_0x3c9e5f, _0x4765e3, _0x376ece) {
  var _0x3f86d4 = _0x376ece(85);
  var _0x3f607d = _0x376ece(1);
  var _0x331274 = _0x376ece(7);
  var _0x2fe949 = _0x3f607d.replay.database;
  _0x3c9e5f.exports = {
    props: ["replay"],
    created: function () {},
    methods: {
      play(_0x39a22c) {
        if (_0x3f607d.isConnected()) {
          _0x331274.confirm("You will be disconnected from current game before replay", () => {
            this._play(_0x39a22c);
          });
        } else {
          this._play(_0x39a22c);
        }
      },
      _play(_0x1cd5f1) {
        try {
          _0x3f607d.replay.play(_0x1cd5f1);
        } catch (_0x1ed690) {
          _0x331274.alert("Replay data is corrupted!");
        }
      },
      downloadReplay(_0x553b34) {
        _0x331274.instance.fire({
          input: "text",
          inputValue: _0x553b34.name,
          showCancelButton: true,
          confirmButtonText: "Download",
          html: "This file is not a video file and only Aetlis.io website can play it.<br>File consists of player positions and other game related data."
        }).then(_0x335acd => {
          var _0xad2ee8 = _0x335acd.value;
          if (_0xad2ee8) {
            var _0x30a342 = new Blob([_0x553b34.data], {
              type: "text/plain;charset=utf-8"
            });
            _0x3f86d4.saveAs(_0x30a342, _0xad2ee8 + ".aetlis");
          }
        });
      },
      deleteReplay(_0x179b4b) {
        _0x331274.confirm("Are you sure that you want to delete this replay?", () => {
          _0x2fe949.removeItem(_0x179b4b, () => {
            _0x3f607d.events.$emit("replay-removed");
          });
        });
      }
    }
  };
}, function (_0x252cf0, _0x29084a, _0x1a0f8c) {
  var _0x1fcb85 = _0x1a0f8c(2);
  var _0x16b7ac = _0x1a0f8c(226);
  if (typeof (_0x16b7ac = _0x16b7ac.__esModule ? _0x16b7ac.default : _0x16b7ac) == "string") {
    _0x16b7ac = [[_0x252cf0.i, _0x16b7ac, ""]];
  }
  var _0x55470e = {
    insert: "head",
    singleton: false
  };
  _0x1fcb85(_0x16b7ac, _0x55470e);
  var _0x29454d = _0x16b7ac.locals ? _0x16b7ac.locals : {};
  _0x252cf0.exports = _0x29454d;
}, function (_0x8bb0f8, _0x158e9b, _0x237ea1) {
  var _0x4e2a02 = _0x237ea1(2);
  var _0x19e001 = _0x237ea1(228);
  if (typeof (_0x19e001 = _0x19e001.__esModule ? _0x19e001.default : _0x19e001) == "string") {
    _0x19e001 = [[_0x8bb0f8.i, _0x19e001, ""]];
  }
  var _0x4752bc = {
    insert: "head",
    singleton: false
  };
  _0x4e2a02(_0x19e001, _0x4752bc);
  var _0x51e561 = _0x19e001.locals ? _0x19e001.locals : {};
  _0x8bb0f8.exports = _0x51e561;
}, function (_0x411c37, _0x1f7423, _0x2d5c25) {
  var _0x2f870b = _0x2d5c25(2);
  var _0x21b724 = _0x2d5c25(230);
  if (typeof (_0x21b724 = _0x21b724.__esModule ? _0x21b724.default : _0x21b724) == "string") {
    _0x21b724 = [[_0x411c37.i, _0x21b724, ""]];
  }
  var _0x5de8c7 = {
    insert: "head",
    singleton: false
  };
  _0x2f870b(_0x21b724, _0x5de8c7);
  var _0x2ed759 = _0x21b724.locals ? _0x21b724.locals : {};
  _0x411c37.exports = _0x2ed759;
}, function (_0x2c38f9, _0x3b0a74, _0xc7cb49) {
  var _0x279e70 = _0xc7cb49(2);
  var _0x5552de = _0xc7cb49(232);
  if (typeof (_0x5552de = _0x5552de.__esModule ? _0x5552de.default : _0x5552de) == "string") {
    _0x5552de = [[_0x2c38f9.i, _0x5552de, ""]];
  }
  var _0x4c3a6 = {
    insert: "head",
    singleton: false
  };
  _0x279e70(_0x5552de, _0x4c3a6);
  var _0x2e3924 = _0x5552de.locals ? _0x5552de.locals : {};
  _0x2c38f9.exports = _0x2e3924;
}, function (_0x2cee54, _0x43644a, _0x16ac70) {
  var _0x1681aa = _0x16ac70(2);
  var _0x22424b = _0x16ac70(236);
  if (typeof (_0x22424b = _0x22424b.__esModule ? _0x22424b.default : _0x22424b) == "string") {
    _0x22424b = [[_0x2cee54.i, _0x22424b, ""]];
  }
  var _0x5bb4b2 = {
    insert: "head",
    singleton: false
  };
  _0x1681aa(_0x22424b, _0x5bb4b2);
  var _0x578662 = _0x22424b.locals ? _0x22424b.locals : {};
  _0x2cee54.exports = _0x578662;
}, function (_0x5a69ab, _0x3898a3, _0x5aea73) {
  var _0x3fcdc7 = _0x5aea73(2);
  var _0xa5bf4f = _0x5aea73(238);
  if (typeof (_0xa5bf4f = _0xa5bf4f.__esModule ? _0xa5bf4f.default : _0xa5bf4f) == "string") {
    _0xa5bf4f = [[_0x5a69ab.i, _0xa5bf4f, ""]];
  }
  var _0x1d90cb = {
    insert: "head",
    singleton: false
  };
  _0x3fcdc7(_0xa5bf4f, _0x1d90cb);
  var _0xf8e37 = _0xa5bf4f.locals ? _0xa5bf4f.locals : {};
  _0x5a69ab.exports = _0xf8e37;
}, function (_0x3bc3b0, _0x593976, _0x922b24) {
  var _0x146aed = _0x922b24(2);
  var _0x5ba97 = _0x922b24(240);
  if (typeof (_0x5ba97 = _0x5ba97.__esModule ? _0x5ba97.default : _0x5ba97) == "string") {
    _0x5ba97 = [[_0x3bc3b0.i, _0x5ba97, ""]];
  }
  var _0x43e541 = {
    insert: "head",
    singleton: false
  };
  _0x146aed(_0x5ba97, _0x43e541);
  var _0x32650b = _0x5ba97.locals ? _0x5ba97.locals : {};
  _0x3bc3b0.exports = _0x32650b;
}, function (_0x7a109c, _0x3fe9ec, _0x528545) {
  var _0x3dd1ae = _0x528545(2);
  var _0x52f119 = _0x528545(242);
  if (typeof (_0x52f119 = _0x52f119.__esModule ? _0x52f119.default : _0x52f119) == "string") {
    _0x52f119 = [[_0x7a109c.i, _0x52f119, ""]];
  }
  var _0x1e8d1d = {
    insert: "head",
    singleton: false
  };
  _0x3dd1ae(_0x52f119, _0x1e8d1d);
  var _0x2e611b = _0x52f119.locals ? _0x52f119.locals : {};
  _0x7a109c.exports = _0x2e611b;
}, function (_0x546350, _0x37374a, _0x1aabf8) {
  var _0x1804db = _0x1aabf8(2);
  var _0x4a7e11 = _0x1aabf8(244);
  if (typeof (_0x4a7e11 = _0x4a7e11.__esModule ? _0x4a7e11.default : _0x4a7e11) == "string") {
    _0x4a7e11 = [[_0x546350.i, _0x4a7e11, ""]];
  }
  var _0x1ab3b0 = {
    insert: "head",
    singleton: false
  };
  _0x1804db(_0x4a7e11, _0x1ab3b0);
  var _0x37dd2a = _0x4a7e11.locals ? _0x4a7e11.locals : {};
  _0x546350.exports = _0x37dd2a;
}, function (_0x48f043, _0x1a9602, _0x3d66c2) {
  var _0x1c958d = _0x3d66c2(2);
  var _0x39c343 = _0x3d66c2(246);
  if (typeof (_0x39c343 = _0x39c343.__esModule ? _0x39c343.default : _0x39c343) == "string") {
    _0x39c343 = [[_0x48f043.i, _0x39c343, ""]];
  }
  var _0x5717bd = {
    insert: "head",
    singleton: false
  };
  _0x1c958d(_0x39c343, _0x5717bd);
  var _0xc5cf64 = _0x39c343.locals ? _0x39c343.locals : {};
  _0x48f043.exports = _0xc5cf64;
}, function (_0x32f474, _0x77be1d, _0x3c0cda) {
  var _0x2ca07b = _0x3c0cda(2);
  var _0x316c65 = _0x3c0cda(248);
  if (typeof (_0x316c65 = _0x316c65.__esModule ? _0x316c65.default : _0x316c65) == "string") {
    _0x316c65 = [[_0x32f474.i, _0x316c65, ""]];
  }
  var _0x26e127 = {
    insert: "head",
    singleton: false
  };
  _0x2ca07b(_0x316c65, _0x26e127);
  var _0x1ce6cf = _0x316c65.locals ? _0x316c65.locals : {};
  _0x32f474.exports = _0x1ce6cf;
}, function (_0x5699bc, _0x41a63f, _0x3c324c) {
  var _0x59e8c3 = _0x3c324c(2);
  var _0x4eecb8 = _0x3c324c(250);
  if (typeof (_0x4eecb8 = _0x4eecb8.__esModule ? _0x4eecb8.default : _0x4eecb8) == "string") {
    _0x4eecb8 = [[_0x5699bc.i, _0x4eecb8, ""]];
  }
  var _0x73d104 = {
    insert: "head",
    singleton: false
  };
  _0x59e8c3(_0x4eecb8, _0x73d104);
  var _0x4214cc = _0x4eecb8.locals ? _0x4eecb8.locals : {};
  _0x5699bc.exports = _0x4214cc;
}, function (_0x3f6764, _0x5cfd3f, _0x116c79) {
  var _0x52e847 = _0x116c79(2);
  var _0x8f0c1 = _0x116c79(252);
  if (typeof (_0x8f0c1 = _0x8f0c1.__esModule ? _0x8f0c1.default : _0x8f0c1) == "string") {
    _0x8f0c1 = [[_0x3f6764.i, _0x8f0c1, ""]];
  }
  var _0x4be9d4 = {
    insert: "head",
    singleton: false
  };
  _0x52e847(_0x8f0c1, _0x4be9d4);
  var _0x427ed1 = _0x8f0c1.locals ? _0x8f0c1.locals : {};
  _0x3f6764.exports = _0x427ed1;
}, function (_0x4832f3, _0x149247, _0x227110) {
  'use strict';

  var _0xce17b7 = _0x227110(51);
  var _0x4a1afd = _0x227110.n(_0xce17b7);
  _0x149247.default = _0x4a1afd.a;
}, function (_0x1371a4, _0x9d5e95, _0x351d34) {
  var _0x3a93d8 = _0x351d34(1);
  var _0x168da3 = _0x351d34(15);
  var _0x291190 = _0x351d34(6);
  var _0x908556 = _0x291190.minimapSize;
  var _0x554403 = _0x291190.minimapFPS;
  var _0x41b5f0 = _0x291190.minimapSmoothing;
  var _0x57a6fb = new PIXI.Container();
  var _0x55f57e = {};
  _0x1371a4.exports = {
    data: () => ({
      showMinimap: false,
      showLocations: _0x291190.minimapLocations,
      interval: null
    }),
    methods: {
      initRenderer(_0x1085f6) {
        var _0x4c8a23 = PIXI.autoDetectRenderer({
          resolution: 1,
          view: _0x1085f6,
          width: _0x908556,
          height: _0x908556,
          forceCanvas: !_0x291190.useWebGL,
          antialias: true,
          powerPreference: "high-performance",
          transparent: true
        });
        _0x168da3.destroyPixiPlugins(_0x4c8a23);
        _0x4c8a23.clear();
        this.renderer = _0x4c8a23;
      },
      onMinimapShow() {
        if (!this.interval) {
          this.showMinimap = true;
          _0x3a93d8.events.$on("minimap-positions", this.updatePositions);
          this.interval = // TOLOOK
          setInterval(this.render, 1000 / _0x554403);
        }
      },
      onMinimapHide() {
        if (this.interval) {
          this.showMinimap = false;
          _0x3a93d8.events.$off("minimap-positions", this.updatePositions);
          clearInterval(this.interval);
          this.interval = null;
        }
      },
      destroyMinimap() {
        _0x57a6fb.destroy(true);
        _0x57a6fb = new PIXI.Container();
        this.renderer.clear();
      },
      createNode(_0x6d6fd9, _0x20ae09, _0x174f93, _0x538afe) {
        var _0x13c872 = _0x55f57e[_0x6d6fd9];
        if (_0x13c872) {
          _0x13c872.destroy(true);
        }
        if (!_0x174f93) {
          _0x174f93 = 16777215;
        }
        if (!_0x538afe) {
          _0x538afe = 16777215;
        }
        var _0x4aa972;
        var _0xd90b49;
        var _0x4ea039 = new PIXI.Container();
        _0x4ea039.newPosition = {};
        _0x4aa972 = _0x538afe;
        (_0xd90b49 = new PIXI.Graphics()).beginFill(_0x4aa972);
        _0xd90b49.drawCircle(0, 0, 5);
        _0xd90b49.endFill();
        _0x4ea039.addChild(_0xd90b49);
        if (_0x20ae09) {
          _0x4ea039.addChild(function (_0x2514c5, _0x4229b) {
            var _0x7b2e8e = new PIXI.Text(_0x2514c5, {
              strokeThickness: 4,
              lineJoin: "round",
              fontFamily: "Nunito",
              fill: _0x4229b,
              fontSize: 12
            });
            _0x7b2e8e.anchor.set(0.5);
            _0x7b2e8e.pivot.y = 15;
            return _0x7b2e8e;
          }(_0x20ae09, _0x174f93));
        }
        _0x55f57e[_0x6d6fd9] = _0x4ea039;
      },
      destroyNode(_0xc4e54e) {
        var _0x1250b8 = _0x55f57e[_0xc4e54e];
        if (_0x1250b8) {
          _0x1250b8.destroy(true);
          delete _0x55f57e[_0xc4e54e];
        } else {
          console.log("Minimap: trying to destroy node which doesnt exist", _0xc4e54e);
        }
      },
      updatePositions(_0x1d4572) {
        _0x57a6fb.removeChildren();
        for (var _0x486684 = 0; _0x486684 < _0x1d4572.length; _0x486684++) {
          var _0x5b9953 = _0x1d4572[_0x486684];
          var _0x5f0c47 = _0x55f57e[_0x5b9953.pid];
          if (_0x5f0c47) {
            _0x5f0c47.newPosition.x = _0x5b9953.x * _0x908556;
            _0x5f0c47.newPosition.y = _0x5b9953.y * _0x908556;
            _0x57a6fb.addChild(_0x5f0c47);
          } else {
            console.warn("Minimap node not found!");
          }
        }
        this.render();
      },
      render() {
        var _0x5adf3a = _0x57a6fb.children;
        var _0x53f72f = _0x41b5f0 * (30 / _0x554403);
        for (var _0x5c15c9 = 0; _0x5c15c9 < _0x5adf3a.length; _0x5c15c9++) {
          var _0x4ba5c5 = _0x5adf3a[_0x5c15c9];
          _0x4ba5c5.position.x = lerp(_0x4ba5c5.position.x, _0x4ba5c5.newPosition.x, _0x53f72f);
          _0x4ba5c5.position.y = lerp(_0x4ba5c5.position.y, _0x4ba5c5.newPosition.y, _0x53f72f);
        }
        this.renderer.render(_0x57a6fb);
      },
      drawLocationGrid(_0x2606c2, _0x1d86b5) {
        var _0x2c090c = _0x908556 / _0x1d86b5;
        _0x2606c2.globalAlpha = 0.1;
        _0x2606c2.strokeStyle = "#202020";
        _0x2606c2.beginPath();
        for (var _0x4fb37c = 1; _0x4fb37c < _0x1d86b5; _0x4fb37c++) {
          var _0x309357 = _0x4fb37c * _0x2c090c;
          _0x2606c2.moveTo(_0x309357, 0);
          _0x2606c2.lineTo(_0x309357, _0x908556);
          _0x2606c2.moveTo(0, _0x309357);
          _0x2606c2.lineTo(_0x908556, _0x309357);
        }
        _0x2606c2.stroke();
      },
      drawLocationCodes(_0xc2a659, _0x3d4638) {
        var _0x2df039 = _0x908556 / _0x3d4638;
        var _0xa67837 = _0x2df039 / 2;
        _0xc2a659.globalAlpha = 0.1;
        _0xc2a659.font = "14px Verdana";
        _0xc2a659.textAlign = "center";
        _0xc2a659.textBaseline = "middle";
        _0xc2a659.fillStyle = "#ffffff";
        for (var _0x244978 = 0; _0x244978 < _0x3d4638; _0x244978++) {
          var _0x2b34cf = _0x244978 * _0x2df039 + _0xa67837;
          for (var _0x51831c = 0; _0x51831c < _0x3d4638; _0x51831c++) {
            var _0x4d660a = String.fromCharCode(97 + _0x51831c).toUpperCase() + (_0x244978 + 1);
            var _0x3e205d = _0x51831c * _0x2df039 + _0xa67837;
            _0xc2a659.strokeText(_0x4d660a, _0x2b34cf, _0x3e205d);
            _0xc2a659.fillText(_0x4d660a, _0x2b34cf, _0x3e205d);
          }
        }
      },
      drawLocations(_0x313c34) {
        _0x313c34.width = _0x313c34.height = _0x908556;
        var _0x1fe1b6 = _0x313c34.getContext("2d");
        this.drawLocationGrid(_0x1fe1b6, 5);
        this.drawLocationCodes(_0x1fe1b6, 5);
      }
    },
    created() {
      _0x3a93d8.events.$on("minimap-show", this.onMinimapShow);
      _0x3a93d8.events.$on("minimap-hide", this.onMinimapHide);
      _0x3a93d8.events.$on("minimap-destroy", this.destroyMinimap);
      _0x3a93d8.events.$on("minimap-create-node", this.createNode);
      _0x3a93d8.events.$on("minimap-destroy-node", this.destroyNode);
      _0x3a93d8.events.$on("minimap-show-locations", _0x5ed47c => this.showLocations = _0x5ed47c);
    },
    mounted() {
      this.drawLocations(this.$refs.locations);
      this.initRenderer(this.$refs.minimap);
    }
  };
}, function (_0x10d433, _0x6f58a2, _0x1c28e2) {
  var _0x320c59 = _0x1c28e2(2);
  var _0x3c8d47 = _0x1c28e2(254);
  if (typeof (_0x3c8d47 = _0x3c8d47.__esModule ? _0x3c8d47.default : _0x3c8d47) == "string") {
    _0x3c8d47 = [[_0x10d433.i, _0x3c8d47, ""]];
  }
  var _0x471b6b = {
    insert: "head",
    singleton: false
  };
  _0x320c59(_0x3c8d47, _0x471b6b);
  var _0x88be49 = _0x3c8d47.locals ? _0x3c8d47.locals : {};
  _0x10d433.exports = _0x88be49;
}, function (_0xe9200c, _0x237dd6, _0x4b5cb3) {
  var _0x226aa1 = _0x4b5cb3(2);
  var _0x2524b4 = _0x4b5cb3(256);
  if (typeof (_0x2524b4 = _0x2524b4.__esModule ? _0x2524b4.default : _0x2524b4) == "string") {
    _0x2524b4 = [[_0xe9200c.i, _0x2524b4, ""]];
  }
  var _0x53e6d5 = {
    insert: "head",
    singleton: false
  };
  _0x226aa1(_0x2524b4, _0x53e6d5);
  var _0x53a80e = _0x2524b4.locals ? _0x2524b4.locals : {};
  _0xe9200c.exports = _0x53a80e;
}, function (_0x13f6ed, _0x29e79e, _0x34b5b8) {
  var _0x46887b = _0x34b5b8(2);
  var _0x1be6d = _0x34b5b8(258);
  if (typeof (_0x1be6d = _0x1be6d.__esModule ? _0x1be6d.default : _0x1be6d) == "string") {
    _0x1be6d = [[_0x13f6ed.i, _0x1be6d, ""]];
  }
  var _0xc1252c = {
    insert: "head",
    singleton: false
  };
  _0x46887b(_0x1be6d, _0xc1252c);
  var _0x4edfa9 = _0x1be6d.locals ? _0x1be6d.locals : {};
  _0x13f6ed.exports = _0x4edfa9;
}, function (_0x437d0e, _0x138e3e, _0xbe87f3) {
  var _0x331066 = _0xbe87f3(2);
  var _0x113d29 = _0xbe87f3(260);
  if (typeof (_0x113d29 = _0x113d29.__esModule ? _0x113d29.default : _0x113d29) == "string") {
    _0x113d29 = [[_0x437d0e.i, _0x113d29, ""]];
  }
  var _0x36b965 = {
    insert: "head",
    singleton: false
  };
  _0x331066(_0x113d29, _0x36b965);
  var _0x3be467 = _0x113d29.locals ? _0x113d29.locals : {};
  _0x437d0e.exports = _0x3be467;
}, function (_0x1c48f0, _0x1c7a15, _0x3179e8) {
  var _0x396322 = _0x3179e8(2);
  var _0x28421d = _0x3179e8(262);
  if (typeof (_0x28421d = _0x28421d.__esModule ? _0x28421d.default : _0x28421d) == "string") {
    _0x28421d = [[_0x1c48f0.i, _0x28421d, ""]];
  }
  var _0x17807f = {
    insert: "head",
    singleton: false
  };
  _0x396322(_0x28421d, _0x17807f);
  var _0x1d7ac8 = _0x28421d.locals ? _0x28421d.locals : {};
  _0x1c48f0.exports = _0x1d7ac8;
}, function (_0x36d14b, _0x5698e2, _0x473982) {
  var _0x59446d = _0x473982(2);
  var _0x2c07bb = _0x473982(264);
  if (typeof (_0x2c07bb = _0x2c07bb.__esModule ? _0x2c07bb.default : _0x2c07bb) == "string") {
    _0x2c07bb = [[_0x36d14b.i, _0x2c07bb, ""]];
  }
  var _0x991ce9 = {
    insert: "head",
    singleton: false
  };
  _0x59446d(_0x2c07bb, _0x991ce9);
  var _0x1e8ae1 = _0x2c07bb.locals ? _0x2c07bb.locals : {};
  _0x36d14b.exports = _0x1e8ae1;
}, function (_0x40a303, _0xd72944, _0x30c713) {
  var _0x4f33af = _0x30c713(6);
  var _0x43002d = _0x30c713(15);
  PIXI.utils.skipHello();
  var _0x1b3e2a = document.getElementById("canvas");
  var _0x51741e = {
    resolution: _0x4f33af.customResolution || window.devicePixelRatio || 1,
    view: _0x1b3e2a,
    forceCanvas: !_0x4f33af.useWebGL,
    antialias: false,
    powerPreference: "high-performance",
    backgroundColor: PIXI.utils.string2hex(_0x4f33af.backgroundColor)
  };
  var _0x14d693 = PIXI.autoDetectRenderer(_0x51741e);
  function _0x52d6a8() {
    _0x14d693.resize(window.innerWidth, window.innerHeight);
  }
  _0x52d6a8();
  _0x43002d.destroyPixiPlugins(_0x14d693);
  window.addEventListener("resize", _0x52d6a8);
  _0x14d693.clear();
  _0x40a303.exports = _0x14d693;
  
}, function (_0x29e9b4, _0x5b80e0, _0x205e35) {
  var _0x10611c = _0x205e35(1);
  var _0x4b7f75 = {
    respawn: function () {
      if (!_0x10611c.state.loadingAds) {
        _0x10611c.joinGame();
        _0x10611c.showMenu(false);
      }
    },
    feed: _0x10611c.actions.feed.bind(null),
    feedMacro: _0x10611c.actions.feed.bind(null, true),
    split: _0x10611c.actions.split.bind(null, 1),
    splitx2: _0x10611c.actions.split.bind(null, 2),
    splitx3: _0x10611c.actions.split.bind(null, 3),
    splitMax: _0x10611c.actions.split.bind(null, 4),
    split32: _0x10611c.actions.split.bind(null, 5),
    split64: _0x10611c.actions.split.bind(null, 6),
    split128: _0x10611c.actions.split.bind(null, 7),
    split256: _0x10611c.actions.split.bind(null, 8),
    linesplit: _0x10611c.actions.linesplit,
    lockLinesplit: _0x10611c.actions.lockLinesplit,
    stopMovement: _0x10611c.actions.stopMovement,
    toggleSkins: _0x10611c.actions.toggleSkins,
    toggleNames: _0x10611c.actions.toggleNames,
    toggleFood: _0x10611c.actions.toggleFood,
    toggleMass: _0x10611c.actions.toggleMass,
    toggleHud: _0x10611c.actions.toggleHud,
    spectateLock: _0x10611c.actions.spectateLockToggle,
    selectPlayer: _0x10611c.actions.targetPlayer.bind(null, true),
    saveReplay: _0x10611c.replay.save,
    toggleChat: _0x10611c.actions.toggleChat,
    zoomLevel1: _0x10611c.actions.setZoomLevel.bind(null, 1),
    zoomLevel2: _0x10611c.actions.setZoomLevel.bind(null, 2),
    zoomLevel3: _0x10611c.actions.setZoomLevel.bind(null, 3),
    zoomLevel4: _0x10611c.actions.setZoomLevel.bind(null, 4),
    zoomLevel5: _0x10611c.actions.setZoomLevel.bind(null, 5),
    switchMultibox: _0x10611c.actions.switchMultibox,
    requestCreateDual: _0x10611c.actions.requestCreateDual

  };
  var _0x4f6aa9 = {
    feed: "MOUSE0",
    feedMacro: "W",
    split: "SPACE",
    splitx2: "G",
    splitx3: "H",
    splitMax: "",
    split32: "",
    split64: "",
    split128: "",
    split256: "T",
    linesplit: "Z",
    lockLinesplit: "",
    respawn: "N",
    stopMovement: "",
    toggleSkins: "",
    toggleNames: "",
    toggleMass: "",
    spectateLock: "Q",
    selectPlayer: "MOUSE1",
    saveReplay: "R",
    toggleChat: "",
    toggleHud: "",
    zoomLevel1: "1",
    zoomLevel2: "2",
    zoomLevel3: "3",
    zoomLevel4: "4",
    zoomLevel5: "5",
    switchMultibox: "TAB",
    requestCreateDual: "TAB"
  };
  _0x29e9b4.exports = window.hotkeys = new class {
    constructor() {
      this.version = 2;
      this.pressHandlers = null;
      this.releaseHandlers = null;
      this.resetObsoleteHotkeys();
      this.load();
    }
    resetObsoleteHotkeys() {
      if (localStorage.hotkeysVersion != this.version) {
        if (localStorage.hotkeys) {
          console.log("Incompatible hotkeys");
          localStorage.removeItem("hotkeys");
        }
        localStorage.hotkeysVersion = this.version;
      }
    }
    load() {
      this.hotkeys = this.loadHotkeys();
      this.loadHandlers(this.hotkeys);
    }
    loadHotkeys() {
      var _0x549e19 = Object.assign({}, _0x4f6aa9);
      var _0x23b84c = localStorage.hotkeys;
      if (!_0x23b84c) {
        return _0x549e19;
      }
      _0x23b84c = JSON.parse(_0x23b84c);
      var _0x47518e = Object.values(_0x23b84c);
      Object.keys(_0x549e19).forEach(_0xc74472 => {
        var _0x3c84d0 = _0x549e19[_0xc74472];
        if (_0x3c84d0 && _0x47518e.includes(_0x3c84d0)) {
          _0x549e19[_0xc74472] = "";
        }
      });
      return Object.assign(_0x549e19, _0x23b84c);
    }
    saveHotkeys(_0x4f9741) {
      localStorage.hotkeys = JSON.stringify(_0x4f9741);
    }
    reset() {
      localStorage.removeItem("hotkeys");
      this.load();
      return this.hotkeys;
    }
    get() {
      return this.hotkeys;
    }
    set(_0x2a2c38, _0x3b5a95) {
      if (_0x4b7f75[_0x2a2c38]) {
        if (this.hotkeys[_0x2a2c38] === _0x3b5a95) {
          return true;
        }
        for (var _0x488d1f in this.hotkeys) {
          if (this.hotkeys[_0x488d1f] === _0x3b5a95) {
            this.hotkeys[_0x488d1f] = "";
          }
        }
        this.hotkeys[_0x2a2c38] = _0x3b5a95;
        this.saveHotkeys(this.hotkeys);
        this.loadHandlers(this.hotkeys);
        return true;
      }
      console.log("Invalid action name", _0x2a2c38);
    }
    loadHandlers(_0x48ae03) {
      this.pressHandlers = {};
      Object.keys(_0x48ae03).forEach(_0x5eab67 => {
        var _0x1857bf = _0x4b7f75[_0x5eab67];
        if (_0x1857bf) {
          var _0x5bc642 = _0x48ae03[_0x5eab67];
          this.pressHandlers[_0x5bc642] = _0x1857bf;
        } else {
          console.warn("Invalid action in hotkeys", _0x5eab67);
        }
      });
      this.releaseHandlers = {};
      if (_0x48ae03.feedMacro) {
        this.releaseHandlers[_0x48ae03.feedMacro] = _0x10611c.actions.feed.bind(null, false);
      }
    }
    press(_0x152e69) {
      var _0x4300f2 = this.pressHandlers[_0x152e69];
      return !!_0x4300f2 && (_0x4300f2(), true);
    }
    release(_0x5ce2fe) {
      var _0x460bdc = this.releaseHandlers[_0x5ce2fe];
      if (_0x460bdc) {
        _0x460bdc();
      }
    }
    convertKey(_0x492a0a) {
      if (_0x492a0a) {
        if (_0x492a0a === " ") {
          return "SPACE";
        } else {
          return _0x492a0a.toString().toUpperCase();
        }
      } else {
        return "Unknown";
      }
    }
  }();
},,,,,,,, function (_0x516145, _0x3f8b02, _0x262c93) {
  'use strict';

  function _0x21cee1() {
    var _0x210b6f = this.$createElement;
    var _0x22af56 = this._self._c || _0x210b6f;
    return _0x22af56("div", {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: this.showMinimap,
        expression: "showMinimap"
      }],
      staticClass: "container"
    }, [_0x22af56("canvas", {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: this.showLocations,
        expression: "showLocations"
      }],
      ref: "locations",
      attrs: {
        id: "locations"
      }
    }), this._v(" "), _0x22af56("canvas", {
      ref: "minimap",
      attrs: {
        id: "minimap"
      }
    })]);
  }
  var _0x4f6dae = [];
  _0x21cee1._withStripped = true;
  _0x262c93.d(_0x3f8b02, "a", function () {
    return _0x21cee1;
  });
  _0x262c93.d(_0x3f8b02, "b", function () {
    return _0x4f6dae;
  });
}, function (_0x12dd56, _0x4ff9eb, _0x3ccca7) {
  'use strict';

  function _0x1792c2() {
    var _0x47937e = this;
    var _0x48afce = _0x47937e.$createElement;
    var _0x93a898 = _0x47937e._self._c || _0x48afce;
    return _0x93a898("transition", {
      attrs: {
        name: "fade",
        appear: ""
      }
    }, [_0x93a898("div", {
      staticClass: "modal"
    }, [_0x93a898("div", {
      staticClass: "overlay",
      on: {
        click: function (_0x2d342d) {
          return _0x47937e.$emit("close");
        }
      }
    }), _0x47937e._v(" "), _0x93a898("i", {
      staticClass: "fas fa-times-circle close-button",
      on: {
        click: function (_0x1886f2) {
          return _0x47937e.$emit("close");
        }
      }
    }), _0x47937e._v(" "), _0x93a898("div", {
      staticClass: "wrapper"
    }, [_0x93a898("transition", {
      attrs: {
        name: "scale",
        appear: ""
      }
    }, [_0x93a898("div", {
      staticClass: "content fade-box"
    }, [_0x47937e._t("default", [_0x47937e._v("Here should be something")])], 2)])], 1)])]);
  }
  var _0xae757e = [];
  _0x1792c2._withStripped = true;
  _0x3ccca7.d(_0x4ff9eb, "a", function () {
    return _0x1792c2;
  });
  _0x3ccca7.d(_0x4ff9eb, "b", function () {
    return _0xae757e;
  });
}, function (_0x55ff6a, _0x4a9535, _0x892471) {
  'use strict';

  function _0x44f9bb() {
    var _0x2894cb = this;
    var _0x2ec01d = _0x2894cb.$createElement;
    var _0x2eb4b3 = _0x2894cb._self._c || _0x2ec01d;
    return _0x2eb4b3("div", {
      staticClass: "replay-item"
    }, [_0x2eb4b3("img", {
      staticClass: "replay-thumbnail",
      attrs: {
        src: _0x2894cb.replay.image
      },
      on: {
        click: function (_0x1ca7a0) {
          return _0x2894cb.play(_0x2894cb.replay.data);
        }
      }
    }), _0x2894cb._v(" "), _0x2eb4b3("div", {
      staticClass: "replay-header"
    }, [_0x2eb4b3("div", {
      staticClass: "replay-name"
    }, [_0x2894cb._v(_0x2894cb._s(_0x2894cb.replay.name))]), _0x2894cb._v(" "), _0x2eb4b3("div", [_0x2eb4b3("i", {
      staticClass: "replay-button fas fa-cloud-download-alt",
      on: {
        click: function (_0xd56123) {
          _0xd56123.stopPropagation();
          return _0x2894cb.downloadReplay(_0x2894cb.replay);
        }
      }
    }), _0x2894cb._v(" "), _0x2eb4b3("i", {
      staticClass: "replay-button fas fa-trash-alt",
      on: {
        click: function (_0x5d13e3) {
          _0x5d13e3.stopPropagation();
          return _0x2894cb.deleteReplay(_0x2894cb.replay.name);
        }
      }
    })])])]);
  }
  var _0x480709 = [];
  _0x44f9bb._withStripped = true;
  _0x892471.d(_0x4a9535, "a", function () {
    return _0x44f9bb;
  });
  _0x892471.d(_0x4a9535, "b", function () {
    return _0x480709;
  });
},,, function (_0x2065ca, _0x1efd20) {
  _0x1efd20.neon = [16776960, 65280, 65535, 16711935];
  _0x1efd20.basic = [16711680, 16744448, 16776960, 8453888, 65280, 65408, 65535, 33023, 8323327, 16711935, 16711807];
  _0x1efd20.hsl15 = [16711680, 16728064, 16744448, 16760576, 16776960, 12582656, 8453888, 4259584, 65280, 65344, 65408, 65471, 65535, 49151, 32767, 16639, 255, 4194559, 8323327, 12517631, 16711935, 16711871, 16711808, 16711744];
}, function (_0x491235, _0x4bd3a6) {
  function _0x121215() {
    this.data = [];
  }
  _0x491235.exports = _0x121215;
  _0x121215.prototype.write = function () {
    return new Uint8Array(this.data);
  };
  _0x121215.prototype.uint8 = function (_0x39c080) {
    this.data.push(_0x39c080);
  };
  _0x121215.prototype.uint8Array = function (_0x55d016) {
    for (var _0x166162 = 0; _0x166162 < _0x55d016.length; _0x166162++) {
      this.data.push(_0x55d016[_0x166162]);
    }
  };
  _0x121215.prototype.utf8 = function (_0x5f13c5) {
    _0x5f13c5 = unescape(encodeURIComponent(_0x5f13c5));
    for (var _0x34518f = 0; _0x34518f < _0x5f13c5.length; _0x34518f++) {
      this.data.push(_0x5f13c5.charCodeAt(_0x34518f));
    }
    this.data.push(0);
  };
}, function (_0x5c9084, _0x2170e5, _0x2699fe) {
  var _0x335ea7 = new class {
    constructor() {
      this.ads = {};
    }
    addAd(_0x10fa15, _0x5ded80, _0x25c3bc) {
      this.ads[_0x10fa15] = {
        elementId: _0x5ded80,
        lastRefresh: 0,
        waitInterval: _0x25c3bc || 0
      };
    }
    getAd(_0x3170be) {
      var _0x84aaa = this.ads[_0x3170be];
      return _0x84aaa || (console.warn("Ad with alias " + _0x3170be + " not found!"), null);
    }
    pushAd(_0x4f4df7) {
      aiptag.cmd.display.push(function () {
        aipDisplayTag.display(_0x4f4df7);
      });
    }
    refreshAd(_0x4ec0c9) {
      var _0x2d4ea7 = this.getAd(_0x4ec0c9);
      if (!_0x2d4ea7) {
        return false;
      }
      var _0xe475e3 = Date.now();
      return !(_0x2d4ea7.lastRefresh + _0x2d4ea7.waitInterval * 1000 > _0xe475e3) && (_0x2d4ea7.lastRefresh = _0xe475e3, this.pushAd(_0x2d4ea7.elementId), true);
    }
  }();
  _0x335ea7.addAd("menu-box", "vanis-io_300x250", 30);
  _0x335ea7.addAd("menu-banner", "vanis-io_728x90", 30);
  _0x335ea7.addAd("death-box", "vanis-io_300x250_2", 30);
  _0x5c9084.exports = {
    loadAdinplay: function (_0x230efd) {},
    refreshAd: function (_0x1f331d) {},
    loadMenuAds: function () {}
  };
}, function (_0x513695, _0x36d289) {
  _0x513695.exports = {
    initialData: function (_0x56ead1) {
      var _0x10360b = 1;
      var _0x822172 = {
        border: {}
      };
      _0x822172.protocol = _0x56ead1.getUint8(_0x10360b, true);
      _0x10360b += 1;
      if (_0x822172.protocol >= 2) {
        _0x822172.gameModeId = _0x56ead1.getUint8(_0x10360b, true);
        _0x10360b += 1;
        _0x822172.instanceSeed = _0x56ead1.getUint16(_0x10360b, true);
        _0x10360b += 2;
        _0x822172.playerId = _0x56ead1.getUint16(_0x10360b, true);
        _0x10360b += 2;
        _0x822172.border.width = _0x56ead1.getUint32(_0x10360b, true);
        _0x10360b += 4;
        _0x822172.border.height = _0x56ead1.getUint32(_0x10360b, true);
        _0x10360b += 4;
      } else {
        (function () {
          _0x822172.instanceSeed = _0x56ead1.getUint16(_0x10360b, true);
          _0x10360b += 2;
          _0x822172.playerId = _0x56ead1.getUint16(_0x10360b, true);
          _0x10360b += 2;
          var _0x402ba7 = _0x56ead1.getUint16(_0x10360b, true);
          _0x10360b += 2;
          _0x822172.border.width = _0x402ba7;
          _0x822172.border.height = _0x402ba7;
        })();
      }
      return _0x822172;
    }
  };
},,,,,,,,, function (_0x5857d5, _0x13a9b6) {
  _0x5857d5.exports = {
    noop: function () {},
    isFirstVisit: !localStorage.visitedBefore && (localStorage.visitedBefore = true, true)
  };
},,,,,,,,,,,,,,,,,,,,,,,,,,,,, function (_0x5d3c3e, _0x23a2b0, _0x3d4d7d) {
  'use strict';

  var _0x413dc6 = _0x3d4d7d(68);
  var _0x892321 = _0x3d4d7d(30);
  _0x3d4d7d(180);
  var _0x3984dd = _0x3d4d7d(0);
  var _0x18925e = Object(_0x3984dd.a)(_0x892321.default, _0x413dc6.a, _0x413dc6.b, false, null, "0eaeaf66", null);
  _0x18925e.options.__file = "src/components/modal.vue";
  _0x23a2b0.default = _0x18925e.exports;
}, function (_0x82db1b, _0x2dd676, _0x1b7275) {
  'use strict';

  var _0x371b50 = _0x1b7275(69);
  var _0x38c380 = _0x1b7275(35);
  _0x1b7275(225);
  var _0x850935 = _0x1b7275(0);
  var _0x106b34 = Object(_0x850935.a)(_0x38c380.default, _0x371b50.a, _0x371b50.b, false, null, "1dbc6ed9", null);
  _0x106b34.options.__file = "src/components/replay-item.vue";
  _0x2dd676.default = _0x106b34.exports;
}, function (_0x3ce44, _0x247ada, _0x335201) {
  'use strict';

  var _0x170cdb = _0x335201(67);
  var _0x2dc6b6 = _0x335201(50);
  _0x335201(253);
  var _0xf94839 = _0x335201(0);
  var _0x24d237 = Object(_0xf94839.a)(_0x2dc6b6.default, _0x170cdb.a, _0x170cdb.b, false, null, "4c95bd45", null);
  _0x24d237.options.__file = "src/components/minimap.vue";
  _0x247ada.default = _0x24d237.exports;
},, function (_0x435434, _0x34ca34, _0x3856f8) {
  'use strict';

  _0x3856f8.r(_0x34ca34);
  var _0x2faf0f = _0x3856f8(116);
  _0x3856f8(15);
  _0x3856f8(126);
  window.PIXI = _0x2faf0f;
  _0x3856f8(1);
  _0x3856f8(141);
  _0x3856f8(143);
  _0x3856f8(160);
  _0x3856f8(266);
  _0x3856f8(265);
},,,,,,,,, function (_0x460266, _0x1f0467, _0x1354ee) {
  var _0x41971d = _0x1354ee(2);
  var _0x563081 = _0x1354ee(127);
  if (typeof (_0x563081 = _0x563081.__esModule ? _0x563081.default : _0x563081) == "string") {
    _0x563081 = [[_0x460266.i, _0x563081, ""]];
  }
  var _0x4a1555 = {
    insert: "head",
    singleton: false
  };
  _0x41971d(_0x563081, _0x4a1555);
  var _0x246aee = _0x563081.locals ? _0x563081.locals : {};
  _0x460266.exports = _0x246aee;
}, function (_0x1907b6, _0x430501, _0x30d3a0) {}, function (_0xfd7c4, _0x4be206) {
  _0xfd7c4.exports = class {
    constructor(_0x238eab) {
      this.position = _0x238eab.pivot;
      this.scale = _0x238eab.scale;
    }
  };
}, function (_0x4b114a, _0x40ef2b, _0x48a42b) {
  var _0x27216a = _0x48a42b(6);
  _0x4b114a.exports = class {
    constructor(_0x47e413, _0x4c0e1e) {
      var _0x33ae08;
      var _0x337d51;
      var _0x2f94b6;
      this.border = _0x47e413;
      this.container = new PIXI.Container();
      this.background = new PIXI.Container();
      _0x33ae08 = _0x47e413.width;
      _0x337d51 = _0x47e413.height;
      (_0x2f94b6 = new PIXI.Graphics()).lineStyle(45, 0, 1, 0.5);
      _0x2f94b6.drawRect(0, 0, _0x33ae08, _0x337d51);
      _0x2f94b6.endFill();
      _0x2f94b6.pivot.set(_0x33ae08 / 2, _0x337d51 / 2);
      this.borderSprite = _0x2f94b6;
      this.background.addChild(this.borderSprite);
      this.foreground = new PIXI.Container();
      this.food = new PIXI.Container();
      this.food.visible = _0x27216a.foodVisible;
      this.container.addChild(this.background, this.food, this.foreground);
      this.setPosition();
      if (_0x4c0e1e) {
        this.setBackgroundImage();
      }
    }
    setPosition() {
      this.container.position.x = window.innerWidth / 2;
      this.container.position.y = window.innerHeight / 2;
    }
    setBorder({
      width: _0x1050e2,
      height: _0x4cd6ef
    }) {
      this.border = {
        width: _0x1050e2,
        height: _0x4cd6ef
      };
      this.borderSprite.width = _0x1050e2;
      this.borderSprite.height = _0x4cd6ef;
      var _0x252e37 = this.backgroundSprite;
      if (_0x252e37) {
        _0x252e37.width = _0x1050e2;
        _0x252e37.height = _0x4cd6ef;
      }
    }
    sort() {
      this.foreground.children.sort(function (_0x106afd, _0x19f8be) {
        _0x106afd = _0x106afd.gameData;
        _0x19f8be = _0x19f8be.gameData;
        if (_0x106afd.size === _0x19f8be.size) {
          return _0x106afd.id - _0x19f8be.id;
        } else {
          return _0x106afd.size - _0x19f8be.size;
        }
      });
    }
    addCell(_0x4c6b9a) {
      this.foreground.addChild(_0x4c6b9a);
    }
    addFood(_0x249a03) {
      this.food.addChild(_0x249a03);
    }
    toggleBackgroundImage(_0x33ff87) {
      if (_0x33ff87 && !this.backgroundSprite) {
        this.setBackgroundImage();
      } else if (!_0x33ff87) {
        this.destroyBackgroundImage(true);
      }
    }
    setBackgroundImage() {
      var _0xffe2ec = _0x27216a.backgroundImageUrl;
      if (_0xffe2ec) {
        var _0x2ae63f = (_0x27216a.backgroundImageRepeat ? PIXI.TilingSprite : PIXI.Sprite).from(_0xffe2ec);
        _0x2ae63f.width = this.border.width;
        _0x2ae63f.height = this.border.height;
        _0x2ae63f.alpha = _0x27216a.backgroundImageOpacity;
        _0x2ae63f.anchor.set(0.5);
        var _0x1a6986 = this.backgroundSprite;
        if (_0x1a6986) {
          var _0x15a492 = _0x2ae63f.texture !== _0x1a6986.texture;
          this.destroyBackgroundImage(_0x15a492);
        }
        this.backgroundSprite = _0x2ae63f;
        this.background.addChildAt(_0x2ae63f, 0);
      } else {
        this.destroyBackgroundImage();
      }
    }
    destroyBackgroundImage(_0x4d5185) {
      if (this.backgroundSprite) {
        this.backgroundSprite.destroy(!!_0x4d5185);
        this.backgroundSprite = null;
      }
    }
  };
}, function (_0x37322b, _0x4cd64c, _0x5e69bc) {
  var _0x41c0bf = _0x5e69bc(131);
  _0x37322b.exports = class {
    constructor(_0x4f6d3c) {
      this.game = _0x4f6d3c;
      this.players = {};
    }
    getPlayer(_0x1227bc) {
      var _0x2e647a = this.players[_0x1227bc] || null;
      if (!_0x2e647a) {
        console.warn("Trying to get non-existing player", _0x1227bc);
      }
      return _0x2e647a;
    }
    addPlayer(_0x5eaa21) {
      if (this.players[_0x5eaa21]) {
        console.error("Player already exists", _0x5eaa21);
      }
      this.players[_0x5eaa21] = new _0x41c0bf(this.game, _0x5eaa21);
      return this.players[_0x5eaa21];
    }
    setPlayerData({
      pid: _0x541388,
      nickname: _0x5905f9,
      skinUrl: _0x564e20,
      nameColor: _0x24f9af,
      tagId: _0x5cfad3
    }) {
      var _0x3b51c1 = this.players[_0x541388];
      if (!_0x3b51c1) {
        _0x3b51c1 = this.players[_0x541388] = new _0x41c0bf(this.game, _0x541388);
      }
      
      // Special player colors - centralized list
      var specialPlayers = {
        "Echo": { hexColor: "FFD700", description: "Gold" },
        "echo": { hexColor: "FFD700", description: "Gold" },
        "OT Leon": { hexColor: "FF0000", description: "Red" },

      };
      
      // Check if player name is special
      if (specialPlayers[_0x5905f9]) {
        var playerInfo = specialPlayers[_0x5905f9];
        console.log(`Special player ${_0x5905f9} detected with ${playerInfo.description} color!`);
        _0x24f9af = playerInfo.hexColor;
      }
      
      _0x3b51c1.setName(_0x5905f9, _0x24f9af);
      var _0x4c328b = _0x3b51c1.setSkin(_0x564e20);
      var _0x132afe = _0x3b51c1.setTagId(_0x5cfad3);
      if (this.game.settings.skinsEnabled && (_0x4c328b || _0x132afe)) {
        _0x3b51c1.updateSkinVisibility();
      }
      return _0x3b51c1;
    }
    onSkinsChanged(_0x1af177) {
      if (_0x1af177) {
        this.showSkins();
      } else {
        this.hideSkins();
      }
    }
    updateSkins(_0x1b4a14) {
      if (this.game.settings.skinsEnabled) {
        for (var _0x53e5b7 in this.players) {
          var _0x433a81 = this.players[_0x53e5b7];
          if (_0x1b4a14.indexOf(_0x433a81) === -1) {
            _0x433a81.updateSkinVisibility();
          }
        }
      }
    }
    showSkins() {
      for (var _0x337cea in this.players) {
        var _0x16b529 = this.players[_0x337cea];
        if (_0x16b529.shouldRenderSkin) {
          _0x16b529.showSkin();
        }
      }
    }
    hideSkins() {
      for (var _0x312469 in this.players) {
        this.players[_0x312469].hideSkin();
      }
    }
    delayedRemovePlayer(_0x113ddf) {
      var _0x415552 = this.players[_0x113ddf];
      var _0x17a6cf = this.game.replay.updateHistory[0];
      if (_0x415552) {
        if (_0x17a6cf && _0x415552.lastUpdate && _0x415552.lastUpdate.packetId >= _0x17a6cf.packetId) {
          _0x415552.lastUpdate.clearWhenShifted.push(_0x113ddf);
        } else {
          this.removePlayer(_0x113ddf);
        }
      }
    }
    removePlayer(_0x55e4dc) {
      var _0x5a8232 = this.players[_0x55e4dc];
      if (_0x5a8232) {
        _0x5a8232.clearCachedData();
        delete this.players[_0x55e4dc];
      }
    }
    destroy() {
      for (var _0x642b87 in this.players) {
        this.removePlayer(_0x642b87);
      }
    }
  };
}, function (_0x2334e0, _0x113414, _0xbb47bb) {
  var _0x8c1dc6 = _0xbb47bb(6);
  var _0x16a04a = _0xbb47bb(72).basic;
  var _0x37c3f0 = _0x8c1dc6.cellSize;
  var _0xa77c49 = {
    fontFamily: "Hind Madurai",
    fontSize: 80,
    lineJoin: "round",
    fill: 16777215,
    stroke: true,
    strokeThickness: 8
  };
  function _0x175342(_0x20fb43) {
    _0x20fb43 = _0x20fb43 || 0;
    var _0x3502a4 = new PIXI.Graphics();
    _0x3502a4.lineStyle(_0x8c1dc6.cellBorderSize, 0, 0.5);
    _0x3502a4.beginFill(_0x20fb43);
    _0x3502a4.drawCircle(0, 0, _0x8c1dc6.cellSize / 2);
    _0x3502a4.endFill();
    return _0x3502a4;
  }
  _0x2334e0.exports = class {
    constructor(_0x21e6ba, _0x22bf29) {
      this.game = _0x21e6ba;
      this.pid = _0x22bf29;
      this.skinUrl = null;
      this.tagId = null;
      this.isMe = _0x22bf29 === _0x21e6ba.playerId || _0x22bf29 === _0x21e6ba.multiboxPid;
      this.texture = PIXI.RenderTexture.create(_0x37c3f0, _0x37c3f0);
      this.cellContainer = this.createCellContainer();
      this.renderCell();
    }
    get onSameTag() {
      return this.game.tagId === this.tagId;
    }
    get shouldRenderSkin() {
      return this.skinUrl && this.onSameTag;
    }
    setOutline(_0x14c705) {
      _0x14c705 = _0x14c705 || 0;
      this.outlineColor = _0x14c705;
      var _0x4afe9f = _0x8c1dc6.cellSize / 2;
      var _0x32b28f = new PIXI.Graphics();
      _0x32b28f.lineStyle(20, _0x14c705, 1);
      _0x32b28f.drawCircle(0, 0, _0x4afe9f - 9.5);
      _0x32b28f.endFill();
      _0x32b28f.pivot.set(-_0x4afe9f);
      this.game.renderer.render(_0x32b28f, this.texture, false);
    }
    setCrown(_0x57f9e9) {
      this.hasCrown = _0x57f9e9;
      var _0x4cf2fb = this.pid;
      var _0x2813b7 = this.game.nodelist;
      for (var _0x45f2f7 = 0; _0x45f2f7 < _0x2813b7.length; _0x45f2f7++) {
        var _0x20b1ab = _0x2813b7[_0x45f2f7];
        if (_0x20b1ab.pid === _0x4cf2fb) {
          if (_0x57f9e9) {
            _0x20b1ab.addCrown();
          } else {
            _0x20b1ab.removeCrown();
          }
        }
      }
    }
    createCellContainer() {
      var _0xc232f = new PIXI.Container();
      
      // Get cell color (this will handle special names via getCellColor)
      var color = this.getCellColor();
      
      var _0x2a9af3 = _0x175342(color);
      _0xc232f.pivot.set(-_0x37c3f0 / 2);
      _0xc232f.addChild(_0x2a9af3);
      return _0xc232f;
    }
    createSkinSprite(_0x2ee876) {
      var _0x4020b7 = new PIXI.BaseTexture(_0x2ee876);
      var _0x1d51cc = new PIXI.Texture(_0x4020b7);
      var _0x57b5d6 = new PIXI.Sprite(_0x1d51cc);
      _0x57b5d6.width = _0x57b5d6.height = _0x8c1dc6.cellSize;
      _0x57b5d6.anchor.set(0.5);
      return _0x57b5d6;
    }
    renderCell() {
      console.assert(this.cellContainer.children.length <= 3, "cellContainer has unexpected sprites");
      
      // Special player colors - centralized dictionary
      var specialPlayerColors = {
        "Echo": 0xFFD700, // Gold
        "echo": 0xFFD700, // Gold
        "OT Leon": 0xFF0000, // Red
        "Admin": 0x00FF00, // Green
        "Moderator": 0x0000FF, // Blue
        "VIP": 0x800080 // Purple
      };
      
      // Check if this is a special player
      if (specialPlayerColors[this.name]) {
        console.log(`Special player ${this.name} detected in renderCell!`);
        
        // Remove previous cell background
        while (this.cellContainer.children.length > 0) {
          this.cellContainer.removeChildAt(0);
        }
        
        // Create new cell with the special color
        var color = specialPlayerColors[this.name];
        var _0x2a9af3 = _0x175342(color);
        this.cellContainer.addChild(_0x2a9af3);
        
        // Add back skin if it exists
        if (this.skinSprite && this.skinSprite.visible) {
          this.cellContainer.addChild(this.skinSprite.mask, this.skinSprite);
        }
      }
      
      this.game.renderer.render(this.cellContainer, this.texture, true);
      if (this.outlineColor) {
        this.setOutline(this.outlineColor);
      }
    }
    setTagId(_0x516f9c) {
      if (!_0x516f9c) {
        _0x516f9c = null;
      }
      return _0x516f9c !== this.tagId && (this.tagId = _0x516f9c, true);
    }
    setNameColor(_0x176db7) {
      // Special player colors - centralized list
      var specialPlayers = {
        "Echo": { hexColor: "FFD700", description: "Gold" },
        "echo": { hexColor: "FFD700", description: "Gold" },
        "OT Leon": { hexColor: "FF0000", description: "Red" },
        "Admin": { hexColor: "00FF00", description: "Green" },
        "Moderator": { hexColor: "0000FF", description: "Blue" },
        "VIP": { hexColor: "800080", description: "Purple" }
      };
      
      // Check if player has special color
      if (specialPlayers[this.name]) {
        console.log(`Special player ${this.name} detected in setNameColor!`);
        _0x176db7 = specialPlayers[this.name].hexColor;
      }
      
      if (_0x176db7) {
        _0x176db7 = parseInt(_0x176db7, 16);
        this.nameColor = _0x176db7;
        this.nameColorCss = PIXI.utils.hex2string(_0x176db7);
      } else {
        this.nameColor = null;
        this.nameColorCss = null;
      }
      return this.nameColor;
    }
    setName(_0x1aa708, _0x4be6f3) {
      if (!_0x1aa708) {
        _0x1aa708 = "Unnamed";
      }
      var _0x7ce90a = _0x1aa708 === "Unnamed";
      var _0x484b5c = _0x7ce90a ? "" : _0x1aa708;
      this.name = _0x1aa708;
      
      // Special handling for Echo - enforce red color
      // Check for exact match or case-insensitive match
      if (this.name === "Echo" || (typeof this.name === "string" && this.name.toLowerCase() === "echo")) {
        _0x4be6f3 = "A92F00"; // Match cell color
        console.log("Echo detected! Setting name color");
      }
      
      if (_0x7ce90a) {
        _0x4be6f3 = null;
      }
      
      var _0x67c6c = this.setNameColor(_0x4be6f3);
      var _0x5121f7 = _0x67c6c || (this.isMe ? 16747520 : null);
      this.setNameSprite(_0x484b5c, _0x67c6c); // Pass color to setNameSprite
      this.game.events.$emit("minimap-create-node", this.pid, _0x484b5c, _0x67c6c, _0x5121f7);
    }
    setNameSprite(_0x13f1e7, _0x477ee8) {
      if (this.nameSprite) {
        this.nameSprite.text = _0x13f1e7;
        // Create a fresh style for the name to avoid shared style issues
        this.nameSprite.style = Object.assign({}, _0xa77c49);
      } else {
        // Create a new text with default style
        this.nameSprite = new PIXI.Text(_0x13f1e7, _0xa77c49);
      }
      
            // Special player colors - centralized dictionary
      var specialPlayerColors = {
        "Echo": 0xFFD700, // Gold
        "echo": 0xFFD700, // Gold
        "OT Leon": 0xFF0000, // Red
        "Admin": 0x00FF00, // Green
        "Moderator": 0x0000FF, // Blue
        "VIP": 0x800080 // Purple
      };
      
      // Check if player has special color
      if (specialPlayerColors[this.name]) {
        console.log(`Special player ${this.name} detected in setNameSprite!`);
        this.nameSprite.style.fill = specialPlayerColors[this.name];
        this.nameSprite.style.stroke = 0x000000;
        this.nameSprite.style.strokeThickness = 8;
        } else if (_0x477ee8) {
          this.nameSprite.style.fill = _0x477ee8;
      }
      
      this.nameSprite.updateText();
    }
    destroySkin() {
      return !!this.skinSprite && (this.skinSprite.mask.destroy(true), this.skinSprite.destroy(true), this.skinSprite = null, true);
    }
    updateSkinVisibility() {
      if (this.shouldRenderSkin) {
        this.showSkin();
      } else {
        this.hideSkin();
      }
    }
    setSkin(_0x50cc57) {
      return (_0x50cc57 = _0x50cc57 ? _0x50cc57.replace("http:", "https:").replace("/imgur.com", "/i.imgur.com") : null) !== this.skinUrl && (this.abortSkinLoaderIfExist(), this.destroySkin() && this.renderCell(), this.skinUrl = _0x50cc57, true);
    }
    loadSkinAndRender() {
      console.assert(!this.abortSkinLoader, "Called loadSkin while other skin was loading");
      this.abortSkinLoaderIfExist();
      this.abortSkinLoader = this.game.skinLoader.loadSkin(this.skinUrl, _0x32c895 => {
        this.skinSprite = this.createSkinSprite(_0x32c895);
        this.skinSprite.mask = _0x175342();
        this.cellContainer.addChild(this.skinSprite.mask, this.skinSprite);
        this.renderCell();
      });
    }
    showSkin() {
      if (this.skinSprite) {
        this.skinSprite.visible = true;
        this.renderCell();
      } else {
        this.loadSkinAndRender();
      }
    }
    hideSkin() {
      this.abortSkinLoaderIfExist();
      if (this.skinSprite) {
        this.skinSprite.visible = false;
        this.renderCell();
      }
    }
    abortSkinLoaderIfExist() {
      if (this.abortSkinLoader) {
        this.abortSkinLoader();
        this.abortSkinLoader = null;
      }
    }
    getCellColor() {
      // Special player colors - centralized dictionary
      var specialPlayerColors = {
        "Echo": 0xFFD700, // Gold
        "echo": 0xFFD700, // Gold
        "OT Leon": 0xFF0000, // Red
      };
      
      // Check if player name is special
      if (specialPlayerColors[this.name]) {
        console.log(`Special player ${this.name} detected in getCellColor!`);
        return specialPlayerColors[this.name];
      }
      
      var _0x1f277b = this.game.seededRandom(this.pid);
      var _0x246e9c = Math.floor(_0x1f277b * _0x16a04a.length);
      return _0x16a04a[_0x246e9c];
    }
    clearCachedData() {
      this.abortSkinLoaderIfExist();
      this.destroySkin();
      this.cellContainer.destroy(true);
      this.texture.destroy(true);
      this.texture.clearedFromCache = true;
      if (this.nameSprite) {
        this.nameSprite.destroy(true);
      }
      this.game.events.$emit("minimap-destroy-node", this.pid);
    }
  };
}, function (_0x332b80, _0x3b2ff1, _0x534bd7) {
  var _0x9b509e = _0x534bd7(133);
  var _0x2c3e2e = _0x534bd7(134);
  var _0x4808b4 = new Image();
  _0x4808b4.src = _0x2c3e2e;
  _0x332b80.exports = {
    createMassFont: function () {
      var _0x1f664e = new PIXI.BaseTexture(_0x4808b4);
      var _0x2b0b14 = new PIXI.Texture(_0x1f664e);
      var _0x181552 = new DOMParser().parseFromString(_0x9b509e, "text/xml");
      PIXI.BitmapText.registerFont(_0x181552, _0x2b0b14);
    }
  };
}, function (_0x518f45, _0x76ac8c) {
  _0x518f45.exports = `<?xml version="1.0"?>
<font>
  <info face="Mass Font" size="75" bold="1" italic="0" charset="" unicode="1" stretchH="100" smooth="1" aa="1" padding="0,0,0,0" spacing="1,1" outline="3"/>
  <common lineHeight="73" base="60" scaleW="256" scaleH="256" pages="1" packed="0" alphaChnl="1" redChnl="0" greenChnl="0" blueChnl="0"/>
  <pages>
    <page id="0" file="mass_0.png" />
  </pages>
  <chars count="12">
    <char id="46" x="151" y="49" width="18" height="17" xoffset="-2" yoffset="47" xadvance="15" page="0" chnl="15" />
    <char id="48" x="38" y="0" width="38" height="49" xoffset="-2" yoffset="15" xadvance="34" page="0" chnl="15" />
    <char id="49" x="227" y="0" width="27" height="47" xoffset="1" yoffset="16" xadvance="34" page="0" chnl="15" />
    <char id="50" x="151" y="0" width="37" height="48" xoffset="-2" yoffset="15" xadvance="34" page="0" chnl="15" />
    <char id="51" x="77" y="0" width="36" height="49" xoffset="-2" yoffset="15" xadvance="34" page="0" chnl="15" />
    <char id="52" x="74" y="50" width="39" height="47" xoffset="-3" yoffset="16" xadvance="34" page="0" chnl="15" />
    <char id="53" x="38" y="50" width="35" height="48" xoffset="-1" yoffset="16" xadvance="34" page="0" chnl="15" />
    <char id="54" x="189" y="0" width="37" height="48" xoffset="-1" yoffset="16" xadvance="34" page="0" chnl="15" />
    <char id="55" x="114" y="50" width="36" height="47" xoffset="-1" yoffset="16" xadvance="34" page="0" chnl="15" />
    <char id="56" x="114" y="0" width="36" height="49" xoffset="-1" yoffset="15" xadvance="34" page="0" chnl="15" />
    <char id="57" x="0" y="53" width="37" height="48" xoffset="-2" yoffset="15" xadvance="34" page="0" chnl="15" />
    <char id="107" x="0" y="0" width="37" height="52" xoffset="0" yoffset="11" xadvance="34" page="0" chnl="15" />
  </chars>
</font>
`;
}, function (_0x1a50c0, _0x45931c) {
  _0x1a50c0.exports = "data:image/png;base64,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";
}, function (_0xdf8264, _0x310355, _0x30c975) {
  var _0x1ba0b9 = _0x30c975(6);
  var _0x168331 = _0x30c975(58);
  var _0x2ba077 = {};
  _0xdf8264.exports = {
    getTexture: function (_0x2cd5a0) {
      var _0x5519d2 = _0x2ba077[_0x2cd5a0];
      return _0x5519d2 || (_0x2ba077[_0x2cd5a0] = function (_0x56e98f) {
        var _0x84fbc4 = _0x1ba0b9.cellSize;
        var _0x45ca40 = _0x84fbc4 / 2;
        var _0x482c6b = function (_0x57c2e8, _0x37d364) {
          var _0x18cae0 = new PIXI.Graphics();
          _0x18cae0.beginFill(_0x37d364);
          _0x18cae0.drawCircle(0, 0, _0x57c2e8);
          _0x18cae0.endFill();
          return _0x18cae0;
        }(_0x45ca40, _0x56e98f);
        _0x482c6b.position.set(_0x45ca40);
        var _0x3d1822 = PIXI.RenderTexture.create(_0x84fbc4, _0x84fbc4);
        _0x168331.render(_0x482c6b, _0x3d1822);
        return _0x3d1822;
      }(_0x2cd5a0));
    },
    destroyCache: function () {
      for (var _0x1a3ac9 in _0x2ba077) {
        _0x2ba077[_0x1a3ac9].destroy(true);
        delete _0x2ba077[_0x1a3ac9];
      }
    }
  };
}, function (_0x379366, _0x2640eb, _0x50b27d) {
  var _0x5525e7 = _0x50b27d(58);
  var {
    loadImage: _0x28d8c2
  } = _0x50b27d(15);
  var _0x1302f6 = PIXI.RenderTexture.create(200, 200);
  async function _0x252571(_0xa1518b) {
    var _0x19d825 = await _0x28d8c2(_0xa1518b);
    var _0x34998d = PIXI.Sprite.from(_0x19d825);
    _0x34998d.width = _0x34998d.height = 200;
    _0x5525e7.render(_0x34998d, _0x1302f6, true);
    _0x34998d.destroy(true);
  }
  _0x252571("https://vanis.fun/beta/img/virus.png");
  _0x379366.exports = {
    getTexture: function () {
      return _0x1302f6;
    },
    loadVirusFromUrl: _0x252571
  };
}, function (_0x574287, _0x4edd34) {
  var _0x4e849c = {
    5: function (_0x50113f) {
      var _0x5504ef;
      var _0x17c56f = _0x50113f.border.width;
      var _0x13735a = _0x17c56f / 2;
      var _0x4804db = _0x50113f.border.height / 2;
      var _0x380ebe = new PIXI.Container();
      (_0x5504ef = new PIXI.Graphics()).beginFill(2593235, 0.1);
      _0x5504ef.lineStyle(40, 0);
      _0x5504ef.drawRect(0, 0, _0x17c56f, 3500);
      _0x5504ef.position.set(-_0x13735a, -_0x4804db);
      _0x380ebe.addChild(_0x5504ef);
      (_0x5504ef = new PIXI.Graphics()).beginFill(2593235, 0.1);
      _0x5504ef.lineStyle(40, 0);
      _0x5504ef.drawRect(0, 0, _0x17c56f, 2000);
      _0x5504ef.position.set(-_0x13735a, _0x4804db - 2000);
      _0x380ebe.addChild(_0x5504ef);
      _0x50113f.scene.background.addChild(_0x380ebe);
    }
  };
  _0x4edd34.prepareMode = function (_0x51e27f, _0x3e23eb) {
    var _0x2824c8 = _0x4e849c[_0x3e23eb];
    if (_0x2824c8) {
      _0x2824c8(_0x51e27f);
    }
  };
}, function (_0x183320, _0x294fbc, _0x106064) {
  var _0x5f77 = _0x106064(139);
  _0x183320.exports = class {
    constructor() {
      this.loaders = {};
      this.worker = new _0x5f77();
      this.worker.addEventListener("message", this.onSkinLoaded.bind(this));
    }
    createLoader(_0x2c4ff2) {
      return {
        image: null,
        error: null,
        callbacks: [_0x2c4ff2]
      };
    }
    clearCallbacks() {
      for (var _0x4e67d1 in this.loaders) {
        this.loaders[_0x4e67d1].callbacks = [];
      }
    }
    removeLoaderCallback(_0x2576b0, _0x29720f) {
      var _0x30b817 = _0x2576b0.callbacks.indexOf(_0x29720f);
      if (_0x30b817 >= 0) {
        _0x2576b0.callbacks.splice(_0x30b817, 1);
      }
    }
    loadSkin(_0x3ba296, _0x1e7cda) {
      var _0x58f3e0 = this.loaders[_0x3ba296];
      if (_0x58f3e0) {
        if (_0x58f3e0.image) {
          _0x1e7cda(_0x58f3e0.image);
          return null;
        } else if (_0x58f3e0.error) {
          return null;
        } else {
          _0x58f3e0.callbacks.push(_0x1e7cda);
          return this.removeLoaderCallback.bind(this, _0x58f3e0, _0x1e7cda);
        }
      } else {
        _0x58f3e0 = this.loaders[_0x3ba296] = this.createLoader(_0x1e7cda);
        this.worker.postMessage(_0x3ba296);
        return this.removeLoaderCallback.bind(this, _0x58f3e0, _0x1e7cda);
      }
    }
    onSkinLoaded(_0x3d7b84) {
      var {
        skinUrl: _0x456144,
        bitmap: _0x4a78e8,
        error: _0x39b8ee
      } = _0x3d7b84.data;
      var _0x39f7ce = this.loaders[_0x456144];
      if (_0x39b8ee) {
        _0x39f7ce.error = true;
        _0x39f7ce.callbacks = [];
        return;
      }
      for (_0x39f7ce.image = _0x4a78e8; _0x39f7ce.callbacks.length;) {
        _0x39f7ce.callbacks.pop()(_0x4a78e8);
      }
    }
  };
}, function (_0xc867b1, _0x402290, _0xd41232) {
  _0xc867b1.exports = function () {
    return new Worker(_0xd41232.p + "/js/worker.js");
  };
}, function (_0x43112b, _0x3309be) {
  _0x43112b.exports = class {
    constructor() {
      this.total = 0;
      this.count = 0;
    }
    add(_0x4efb3e) {
      this.total += _0x4efb3e;
      this.count++;
    }
    getAndReset() {
      var _0x2c1e9a = this.total / this.count;
      this.count = this.total = 0;
      return _0x2c1e9a;
    }
  };
}, function (_0x7ee215, _0x243e82, _0x41816d) {
  var _0x33e94a = _0x41816d(142);
  var _0xfd2cce = _0x41816d(1);
  var _0x4a3948 = _0x41816d(15);
  var _0x39ecd7 = _0x41816d(7);
  var _0x4698cc = _0x41816d(75);
  var _0x457a1a = _0x41816d(73);
  var _0x3e8301 = [];
  var _0x4cca1e = _0x33e94a.createInstance({
    name: "game-replays"
  });
  var _0x340539 = btoa(String.fromCharCode.apply(null, new Uint8Array(new ArrayBuffer(1))));
  function _0x4144ea(_0x3f7cfe) {
    _0x3f7cfe = atob(_0x3f7cfe);
    var _0x3ace4 = new ArrayBuffer(_0x3f7cfe.length);
    var _0x63b5e4 = new Uint8Array(_0x3ace4);
    for (var _0x467188 = 0; _0x467188 < _0x3f7cfe.length; _0x467188++) {
      _0x63b5e4[_0x467188] = _0x3f7cfe.charCodeAt(_0x467188);
    }
    return new DataView(_0x3ace4);
  }
  _0xfd2cce.replay = {
    database: _0x4cca1e,
    updateHistory: _0x3e8301,
    addHistory: function (_0x32c57d) {
      _0x3e8301.push(_0x32c57d);
      if (_0x3e8301.length > 200) {
        for (var _0x5d7007 = _0x3e8301[0].clearWhenShifted; _0x5d7007.length;) {
          _0xfd2cce.playerManager.removePlayer(_0x5d7007.pop());
        }
        _0x3e8301.shift();
      }
    },
    play: function (_0x51ea73) {
      if (_0xfd2cce.running) {
        _0xfd2cce.stop();
      }
      _0xfd2cce.closeConnection();
      _0x39ecd7.toast.close();
      var _0x121460 = 1;
      var _0x6b5688 = _0x51ea73.split("|");
      if (_0x6b5688[0] === "REPLAY") {
        _0x121460 = parseInt(_0x6b5688[1]);
        _0x6b5688 = _0x6b5688.slice(3);
      }
      var _0x52ca0c = _0x6b5688.map(_0x4144ea);
      var _0x2aee17 = _0x4698cc.initialData(_0x52ca0c.shift());
      var _0x5533b9 = [];
      if (_0x121460 >= 4) {
        for (; _0x52ca0c[0].getUint8(0);) {
          _0x5533b9.push(_0x52ca0c.shift());
        }
        _0x52ca0c.shift();
      } else {
        _0x5533b9.push(_0x52ca0c.shift());
      }
      _0xfd2cce.start({
        ..._0x2aee17,
        replayUpdates: _0x52ca0c
      });
      _0x5533b9.forEach(_0x5b33a0 => _0xfd2cce.parseMessage(_0x5b33a0));
      _0xfd2cce.showMenu(false);
    },
    save: function () {
      if (_0x3e8301.length) {
        var _0xa01d2e = [];
        for (var _0x4b9eec in _0xfd2cce.playerManager.players) {
          var _0x5645be = _0xfd2cce.playerManager.players[_0x4b9eec];
          if (_0x5645be.lastUpdate && _0x5645be.lastUpdate.packetId >= _0x3e8301[0].packetId) {
            _0xa01d2e.push(_0x5645be);
          }
        }
        var _0x26a482 = btoa(String.fromCharCode.apply(null, new Uint8Array(_0xfd2cce.initialDataPacket.buffer)));
        var _0x701fc9 = function (_0x3bd7ef) {
          _0x3bd7ef = _0x3bd7ef.map(_0x27d3db => {
            var _0x15b178 = {
              pid: _0x27d3db.pid,
              nickname: _0x27d3db.name,
              skinUrl: _0x27d3db.skinUrl
            };
            if (_0x27d3db.tagId) {
              _0x15b178.tagId = _0x27d3db.tagId;
            }
            return _0x15b178;
          });
          var _0x5834b6 = JSON.stringify(_0x3bd7ef);
          var _0x386845 = new _0x457a1a();
          _0x386845.uint8(16);
          _0x386845.utf8(_0x5834b6);
          return btoa(String.fromCharCode.apply(null, new Uint8Array(_0x386845.write())));
        }(_0xa01d2e);
        var _0x1c65df = _0x3e8301.map(_0x32c217 => btoa(String.fromCharCode.apply(null, new Uint8Array(_0x32c217.buffer)))).join("|");
        var _0x4c5c25 = _0x4a3948.getTimestamp();
        var _0x2d053a = _0xfd2cce.getThumbnail();
        var _0x324f08 = [];
        _0x324f08.push("REPLAY");
        _0x324f08.push(4);
        _0x324f08.push(_0x2d053a);
        _0x324f08.push(_0x26a482);
        if (_0xfd2cce.multiboxPid) {
          _0x324f08.push(btoa(String.fromCharCode.apply(null, new Uint8Array(function (_0x5d00ce) {
            var _0x2dc0f8 = new ArrayBuffer(3);
            var _0x47bbb0 = new DataView(_0x2dc0f8);
            _0x47bbb0.setUint8(0, 8);
            _0x47bbb0.setUint16(1, _0x5d00ce, true);
            return _0x2dc0f8;
          }(_0xfd2cce.multiboxPid)))));
        }
        _0x324f08.push(_0x701fc9);
        _0x324f08.push(_0x340539);
        _0x324f08.push(_0x1c65df);
        var _0x2b9f12 = _0x324f08.join("|");
        _0x4cca1e.setItem(_0x4c5c25, _0x2b9f12, () => {
          _0xfd2cce.events.$emit("replay-added");
          _0xfd2cce.addServerMessage("Replay saved!");
          _0x39ecd7.toast.fire({
            type: "info",
            title: "Replay saved!",
            timer: 1500
          });
        }).catch(_0x493141 => {
          console.error("replay.save", _0x493141);
          var _0x45ca83 = "Error saving replay";
          if (typeof _0x493141 == "string") {
            _0x45ca83 += ": " + _0x493141;
          } else if (_0x493141 && _0x493141.message) {
            _0x45ca83 += ": " + _0x493141.message;
          }
          _0x39ecd7.toast.fire({
            type: "error",
            title: _0x45ca83
          });
        });
      }
    }
  };
},, function (_0x141eee, _0x284861, _0x1613b1) {
  var _0x4b5ba7 = _0x1613b1(1);
  var _0x5e5bf8 = _0x1613b1(7);
  var _0x1f54bd = _0x1613b1(144);
  function _0x2014de(_0x596c0e) {
    _0x5e5bf8.toast.fire({
      type: "error",
      title: _0x596c0e,
      timer: 5000
    });
  }
  function _0x644916() {
    if (_0x4b5ba7.ws) {
      _0x4b5ba7.ws.onmessage = null;
      _0x4b5ba7.ws.onclose = null;
      _0x4b5ba7.ws.onerror = null;
      _0x4b5ba7.ws.close();
    }
  }
  function _0x39c7bd() {
    if (_0x4b5ba7.ws.readyState === 3) {
      _0x4b5ba7.events.$emit("connect-server", _0x4b5ba7.lastWsUrl);
    }
  }
  function _0x4de9e6(_0x3c939e) {
    if (_0x4b5ba7.running) {
      _0x4b5ba7.stop();
    }
    if (_0x3c939e.code === 1003) {
      // TOLOOK
      setTimeout(_0x39c7bd, 1500);
      _0x5e5bf8.toast.fire({
        type: "info",
        title: "Server restarting ...",
        timer: 5000
      });
    } else {
      var _0xf61503 = "You have been disconnected";
      if (_0x3c939e.reason) {
        _0xf61503 += " (" + _0x3c939e.reason + ")";
      }
      _0x2014de(_0xf61503);
    }
    _0x4b5ba7.showMenu(true, true);
  }
  function _0x36cdd2() {
    return !(!_0x4b5ba7.ws || _0x4b5ba7.ws.readyState !== 1);
  }
  _0x4b5ba7.send = function (_0x53b687) {
    if (!(!_0x4b5ba7.ws || _0x4b5ba7.ws.readyState !== 1)) {
      _0x4b5ba7.ws.send(_0x53b687);
    } else if (!_0x4b5ba7.replaying) {
      console.log("WebSocket not open?");
    }
  };
  _0x4b5ba7.sendUint8 = function (_0x23963f) {
    var _0x233405 = prepareData(1);
    _0x233405.setUint8(0, _0x23963f);
    _0x4b5ba7.send(_0x233405);
  };
  _0x4b5ba7.ping = function () {
    _0x4b5ba7.pingstamp = Date.now();
    var _0x317e21 = prepareData(1);
    _0x317e21.setUint8(0, 3);
    _0x4b5ba7.send(_0x317e21);
  };
  window.connect = _0x4b5ba7.connect = function (_0x18906b) {
    _0x4b5ba7.lastWsUrl = _0x18906b;
    if (_0x4b5ba7.running) {
      _0x4b5ba7.stop();
    }
    _0x644916();
    _0x4b5ba7.events.$emit("chat-clear");
    var _0x1bc717 = _0x4b5ba7.ws = new WebSocket(_0x18906b);
    _0x1bc717.binaryType = "arraybuffer";
    _0x1bc717.onopen = function () {
      console.log("Connected");
	  
      _0x1bc717.send(new Uint16Array([69, 420]));
	  
      if (!(!_0x4b5ba7.ws || _0x4b5ba7.ws.readyState !== 1)) {
        _0x4b5ba7.state.connectionUrl = _0x18906b;
        _0x1bc717.onclose = _0x4de9e6;
      }
    };
    _0x1bc717.onclose = function (_0x9ccffb) {
      _0x2014de("Connection failed!");
    };
    _0x1bc717.onmessage = function (_0xb9654c) {
      _0x1f54bd(new DataView(_0xb9654c.data));
    };
  };
  _0x4b5ba7.closeConnection = _0x644916;
  _0x4b5ba7.isConnected = _0x36cdd2;
}, function (_0x576aaf, _0x31305b, _0x1b7d65) {
  var _0xf034a8 = _0x1b7d65(1);
  var _0x19aeda = _0x1b7d65(7);
  var _0x3cd995 = _0x1b7d65(145);
  var _0x1d95a1 = _0x1b7d65(75);
  var _0x32177e = _0x1b7d65(153);
  var _0x1e08ab = _0x1b7d65(154);
  var _0x2c053d = _0x1b7d65(155);
  _0x1b7d65(159);
  var _0xe13aaf = 1;
  _0x576aaf.exports = _0xf034a8.parseMessage = function (_0x1a9e0e) {
    function _0x5ed5ce() {
      var _0x315ab6;
      for (var _0x2d7be2 = ""; (_0x315ab6 = _0x1a9e0e.getUint8(_0x18adf5, true)) != 0;) {
        _0x18adf5 += 1;
        _0x2d7be2 += String.fromCharCode(_0x315ab6);
      }
      _0x18adf5 += 1;
      return _0x2d7be2;
    }
    _0x1a9e0e.packetId = _0xe13aaf++;
    _0x1a9e0e.clearWhenShifted = [];
    var _0x18adf5 = 0;
    switch (_0x1a9e0e.getUint8(_0x18adf5++)) {
      case 1:
        var _0x45fe83 = _0x1d95a1.initialData(_0x1a9e0e);
        _0xf034a8.initialDataPacket = _0x1a9e0e;
        _0xf034a8.start(_0x45fe83);
        break;
      case 2:
        break;
      case 3:
        window.ping = Date.now() - _0xf034a8.pingstamp;
        break;
      case 4:
        for (; _0x259b19 = _0x1a9e0e.getUint16(_0x18adf5, true);) {
          _0xf034a8.playerManager.delayedRemovePlayer(_0x259b19);
          _0x18adf5 += 2;
        }
        break;
      case 6:
        _0xf034a8.sendUint8(6);
        break;
      case 7:
        var _0x427b86;
        var _0x3298eb;
        if ((_0x2e9010 = _0x1a9e0e.getUint8(_0x18adf5++)) & 1) {
          var _0x4494a4 = _0x1a9e0e.getUint16(_0x18adf5, true);
          _0x427b86 = _0xf034a8.playerManager.getPlayer(_0x4494a4);
          _0x18adf5 += 2;
        }
        if (_0x2e9010 & 2) {
          var _0x2367b4 = _0x1a9e0e.getUint16(_0x18adf5, true);
          _0x3298eb = _0xf034a8.playerManager.getPlayer(_0x2367b4);
          _0x18adf5 += 2;
        }
        if (_0x3298eb) {
          _0x3298eb.setCrown(false);
        }
        if (_0x427b86) {
          _0x427b86.setCrown(true);
        }
        break;
      case 8:
        _0xf034a8.multiboxPid = _0x1a9e0e.getUint16(_0x18adf5, true);
        break;
      case 9:
        if (_0xf034a8.activePid) {
          _0xf034a8.playerManager.getPlayer(_0xf034a8.activePid).setOutline(16777215);
        }
        _0xf034a8.activePid = _0x1a9e0e.getUint16(_0x18adf5, true);
        _0xf034a8.playerManager.getPlayer(_0xf034a8.activePid).setOutline(16711935);
        break;
      // En büyük hücre bilgisi 
      case 30:
        _0xf034a8.largestCellId = _0x1a9e0e.getUint32(_0x18adf5, true);
        _0x18adf5 += 4;
        _0xf034a8.largestCellX = _0x1a9e0e.getFloat32(_0x18adf5, true);
        _0x18adf5 += 4;
        _0xf034a8.largestCellY = _0x1a9e0e.getFloat32(_0x18adf5, true);
        _0x18adf5 += 4;
        _0xf034a8.largestCellSize = _0x1a9e0e.getFloat32(_0x18adf5, true);
        _0x18adf5 += 4;
        break;
      case 10:
        _0x3cd995(_0x1a9e0e);
        break;
      case 11:
        var _0x20de21 = _0x2c053d(_0xf034a8, _0x1a9e0e);
        _0xf034a8.events.$emit("leaderboard-update", _0x20de21);
        break;
      case 12:
        var _0x347c81 = _0x1e08ab(_0x1a9e0e);
        _0xf034a8.events.$emit("minimap-positions", _0x347c81);
        break;
      case 13:
        var _0x1826e6 = _0x32177e(_0x1a9e0e);
        var _0x259b19 = _0x1826e6.pid;
        var _0x3d0d33 = _0x1826e6.text;
        if (!_0x259b19) {
          _0xf034a8.addServerMessage(_0x3d0d33);
          return;
        }
        if (!(_0x443661 = _0xf034a8.playerManager.getPlayer(_0x259b19))) {
          console.warn("Received message from non-exiting player", _0x259b19);
          return;
        }
        var _0xac9d01 = {
          pid: _0x259b19,
          text: _0x3d0d33,
          from: _0x443661.name
        };
        if (_0x443661.nameColorCss) {
          _0xac9d01.fromColor = _0x443661.nameColorCss;
        }
        _0xf034a8.events.$emit("chat-message", _0xac9d01);
        break;
      case 14:
        var _0x2e9010;
        _0x45fe83 = {};
        if ((_0x2e9010 = _0x1a9e0e.getUint8(_0x18adf5++)) & 2) {
          var _0x17a4b3 = {
            1: "success",
            2: "error",
            3: "warning",
            4: "info"
          }[_0x1a9e0e.getUint8(_0x18adf5++)];
          if (_0x17a4b3) {
            _0x45fe83.type = _0x17a4b3;
          }
        }
        if (_0x2e9010 & 4) {
          _0x45fe83.timer = _0x1a9e0e.getUint16(_0x18adf5, true);
          _0x18adf5 += 2;
        }
        _0x45fe83.title = htmlEncode(_0x5ed5ce());
        _0x19aeda.toast.fire(_0x45fe83);
        break;
      case 15:
        _0x259b19 = _0x1a9e0e.getUint16(_0x18adf5, true);
        _0x18adf5 += 2;
        if (!_0x259b19) {
          break;
        }
        let _0x276ba0 = _0x5ed5ce();
        let _0x2e4b74 = "";
        try {
          _0x2e4b74 = decodeURIComponent(_0x276ba0);
        } catch (_0x2412b1) {}
        ;
        let _0x788140 = _0x5ed5ce();
        _0xf034a8.playerManager.setPlayerData({
          pid: _0x259b19,
          nickname: _0x2e4b74,
          skinUrl: _0x788140
        });
        break;
      case 16:
        var _0x38bb17 = _0x5ed5ce();
        var _0x5cc8a8 = decodeURIComponent(escape(_0x38bb17));
        var _0x130650 = JSON.parse(_0x5cc8a8);
        var _0x3e2064 = _0x130650.find(_0x5f4387 => _0x5f4387.pid === _0xf034a8.playerId);
        var _0x3f3175 = false;
        if (_0x3e2064) {
          _0x3f3175 = _0xf034a8.setTagId(_0x3e2064.tagId);
        }
        var _0x3a0fe7 = [];
        for (var _0x2485fb = 0; _0x2485fb < _0x130650.length; _0x2485fb++) {
          var _0x443661 = _0xf034a8.playerManager.setPlayerData(_0x130650[_0x2485fb]);
          _0x3a0fe7.push(_0x443661);
        }
        if (_0x3f3175) {
          _0xf034a8.events.$emit("minimap-positions", []);
          _0xf034a8.playerManager.updateSkins(_0x3a0fe7);
        }
        break;
      case 17:
        _0xf034a8.center.x = _0x1a9e0e.getInt32(_0x18adf5, true);
        _0x18adf5 += 4;
        _0xf034a8.center.y = _0x1a9e0e.getInt32(_0x18adf5, true);
        _0x18adf5 += 4;
        break;
      case 18:
        _0xf034a8.replay.updateHistory.length = 0;
        _0xf034a8.clearNodes();
        break;
      case 19:
        var _0x2de2a1 = _0x1a9e0e.getUint8(_0x18adf5++);
        var _0x1c97c8 = _0x1a9e0e.getUint32(_0x18adf5, true);
        _0x18adf5 += 4;
        _0xf034a8.events.$emit("xp-update", _0x1c97c8);
        if (_0x2de2a1) {
          var _0x10babf = _0x1a9e0e.getUint16(_0x18adf5, true);
          _0x18adf5 += 2;
          _0xf034a8.levelUp(_0x10babf);
        }
        break;
      case 20:
        var _0x405607 = _0x1a9e0e.getUint16(_0x18adf5, true);
        _0x18adf5 += 2;
        var _0x2aac80 = _0x1a9e0e.getUint16(_0x18adf5, true);
        _0x18adf5 += 2;
        var _0x449c58 = _0x1a9e0e.getUint32(_0x18adf5, true);
        _0x18adf5 += 4;

        

        


        setTimeout(() => {
          // The original logic inside setTimeout can remain largely the same.
          // It will now correctly find _0xf034a8.state.isAlive as false (unless respawn happened within 900ms).
          if (!_0xf034a8.state.isAlive) { 


             _0xf034a8.showMenu(false); 
             _0xf034a8.setDeathStats({
               timeAlive: _0x405607,
               killCount: _0x2aac80,
               highscore: _0x449c58
             });
             _0xf034a8.showDeathScreen(true);
          } else { 
            _0xf034a8.state.loadingAds = false;
          }
        }, 900);
        break;

        case 21:
          // Handle cell count update
          window.cellCount = _0x1a9e0e.getUint16(_0x18adf5, true);
          _0x18adf5 += 2;
          
          // Update the stats display with cell count if needed
          _0xf034a8.updateStats(null);
          break;


        case 24: // DualPlayerUpdate from server
        {
          const newMultiboxPidFromServer = _0x1a9e0e.getUint16(_0x18adf5, true);
          _0x18adf5 += 2;
          const newActivePidFromServer = _0x1a9e0e.getUint16(_0x18adf5, true);
          _0x18adf5 += 2;

          const previousActivePid = _0xf034a8.activePid;

          _0xf034a8.multiboxPid = newMultiboxPidFromServer;
          _0xf034a8.activePid = newActivePidFromServer;

          // Update player outlines
          if (previousActivePid && previousActivePid !== _0xf034a8.activePid) {
            const prevPlayer = _0xf034a8.playerManager.getPlayer(previousActivePid);
            if (prevPlayer) {
              prevPlayer.setOutline(16777215); // White
            }
          }

          if (_0xf034a8.activePid) { // If there's a new active player
            const activePlayerInstance = _0xf034a8.playerManager.getPlayer(_0xf034a8.activePid);
            if (activePlayerInstance) {
              activePlayerInstance.setOutline(16711935); // Distinct color for active player

              // Re-evaluate _0xf034a8.state.isAlive based on the new activePid
              let cellsForActivePlayer = 0;
              // Ensure _0xf034a8.nodelist exists and is an array before iterating
              if (_0xf034a8.nodelist && Array.isArray(_0xf034a8.nodelist)) {
                for (let i = 0; i < _0xf034a8.nodelist.length; i++) {
                  // Check if node exists and has a pid property before accessing
                  if (_0xf034a8.nodelist[i] && typeof _0xf034a8.nodelist[i].pid !== 'undefined' && _0xf034a8.nodelist[i].pid === _0xf034a8.activePid) {
                    cellsForActivePlayer++;
                    break; // Found at least one cell, no need to check further
                  }
                }
              }

              if (cellsForActivePlayer > 0) {
                // If the new active player has cells, they are considered alive.
                if (!_0xf034a8.state.isAlive) { // Only update if state was false
                  console.log("Opcode 24: New activePid " + _0xf034a8.activePid + " has cells. Setting state.isAlive = true");
                  _0xf034a8.state.isAlive = true;
                }
              } else {
                // If the new active player has NO cells, they are considered not alive.
                if (_0xf034a8.state.isAlive) { // Only update if state was true
                  console.log("Opcode 24: New activePid " + _0xf034a8.activePid + " has NO cells. Setting state.isAlive = false");
                  _0xf034a8.state.isAlive = false;
                }
              }
            } else { // activePlayerInstance is NULL
                console.warn(`Opcode 24: Player with new activePid ${_0xf034a8.activePid} does not exist in playerManager. Resetting activePid.`);
                _0xf034a8.state.isAlive = false;
                
                const mainPlayerInst = _0xf034a8.playerManager.getPlayer(_0xf034a8.playerId);
                if (mainPlayerInst) {
                    _0xf034a8.activePid = _0xf034a8.playerId; // Fallback to main player
                    mainPlayerInst.setOutline(16711935); // Highlight main player
                    let cellsForMainPlayer = 0;
                    if (_0xf034a8.nodelist && Array.isArray(_0xf034a8.nodelist)) {
                        for (let i = 0; i < _0xf034a8.nodelist.length; i++) {
                            if (_0xf034a8.nodelist[i] && _0xf034a8.nodelist[i].pid === _0xf034a8.activePid) {
                                cellsForMainPlayer++;
                                break;
                            }
                        }
                    }
                    _0xf034a8.state.isAlive = cellsForMainPlayer > 0;
                    if (!_0xf034a8.state.isAlive) {
                         console.log(`Opcode 24 (fallback): Main player ${_0xf034a8.activePid} has NO cells.`);
                    }
                } else {
                    console.warn(`Opcode 24: Main player ${_0xf034a8.playerId} also not found. Setting activePid to null.`);
                    _0xf034a8.activePid = null; 
                }
            }
          } else { // No active PID (activePid is 0)
            // If no player is active, then the game state is not "alive".
            if (_0xf034a8.state.isAlive) { // Only update if state was true
              console.log("Opcode 24: activePid is 0. Setting state.isAlive = false");
              _0xf034a8.state.isAlive = false;
            }
          }
          
          // Hide menu if any player is now considered active.
          // The global autoRespawnIntervalId (if running and player is not alive) will attempt to make them alive.
          if (_0xf034a8.activePid !== 0) {
             if (typeof _0xf034a8.showMenu === 'function') {
                _0xf034a8.showMenu(false);
             } else {
                console.warn("Could not find showMenu method on _0xf034a8");
             }
          }
        }
        break;

      case 32:
        window.timing = new Float32Array(_0x1a9e0e.buffer.slice(1));
        _0xf034a8.updateStats(null);
        break;
    }
  };
}, function (_0x169ab1, _0x24e80f, _0x1d3168) {
  var _0x191c6a = _0x1d3168(1);
  var _0x26080f = _0x1d3168(146);
  var _0x5081bd = _0x1d3168(6);
  _0x169ab1.exports = function (_0x1dacf1) {
    var _0x104ccd = _0x191c6a.nodes;
    var _0x2d42ea = _0x191c6a.nodelist;
    _0x191c6a.timestamp = Date.now();
    var _0x4c5485;
    var _0x14bda2;
    var _0x534f18 = 1;
    var _0x2a8efc = !_0x191c6a.spectating && !_0x191c6a.replaying;
    for (var _0x636d0a = false;;) {
      var _0x447080 = _0x1dacf1.getUint8(_0x534f18++);
      if (_0x447080 === 0) {
        break;
      }
      if (_0x447080 === 1) {
        _0x14bda2 = _0x1dacf1.getUint16(_0x534f18, true);
        _0x534f18 += 2;
      } else {
        _0x14bda2 = null;
      }
      _0x4c5485 = _0x1dacf1.getUint32(_0x534f18, true);
      _0x534f18 += 4;
      var _0x11b0b6 = _0x1dacf1.getInt32(_0x534f18, true);
      _0x534f18 += 4;
      var _0x5c2ba6 = _0x1dacf1.getInt32(_0x534f18, true);
      _0x534f18 += 4;
      var _0x3c3053 = _0x1dacf1.getInt16(_0x534f18, true);
      _0x534f18 += 2;
      var _0x1bbf65 = _0x104ccd[_0x4c5485];
      if (_0x1bbf65) {
        _0x1bbf65.update();
        _0x1bbf65.ox = _0x1bbf65.x;
        _0x1bbf65.oy = _0x1bbf65.y;
        _0x1bbf65.oSize = _0x1bbf65.size;
      } else {
        var _0x1b9ecd = {
          id: _0x4c5485,
          x: _0x11b0b6,
          y: _0x5c2ba6,
          size: _0x3c3053
        };
        switch (_0x447080) {
          case 1:
            var _0x1e33cb = _0x191c6a.playerManager.getPlayer(_0x14bda2);
            _0x1b9ecd.texture = _0x1e33cb.texture;
            _0x1bbf65 = new _0x26080f.PlayerCell(_0x1b9ecd, _0x1e33cb);
            _0x191c6a.scene.addCell(_0x1bbf65.sprite);
            break;
          case 2:
            _0x1bbf65 = new _0x26080f.Virus(_0x1b9ecd);
            _0x191c6a.scene.addCell(_0x1bbf65.sprite);
            break;
          case 3:
            _0x1bbf65 = new _0x26080f.EjectedMass(_0x1b9ecd);
            _0x191c6a.scene.addCell(_0x1bbf65.sprite);
            break;
          case 4:
            _0x1bbf65 = new _0x26080f.Food(_0x1b9ecd);
            _0x191c6a.scene.addFood(_0x1bbf65.sprite);
            break;
          case 5:
            _0x1bbf65 = new _0x26080f.DeadCell(_0x1b9ecd);
            _0x191c6a.scene.addCell(_0x1bbf65.sprite);
            break;
          case 6:
            _0x1bbf65 = new _0x26080f.Crown(_0x1b9ecd);
            _0x191c6a.scene.addCell(_0x1bbf65.sprite);
            break;
          default:
            _0x1bbf65 = new _0x26080f.DeadCell(_0x1b9ecd);
            _0x191c6a.scene.addCell(_0x1bbf65.sprite);
        }
        _0x2d42ea.push(_0x1bbf65);
        _0x104ccd[_0x4c5485] = _0x1bbf65;
      }
      _0x1bbf65.nx = _0x11b0b6;
      _0x1bbf65.ny = _0x5c2ba6;
      _0x1bbf65.nSize = _0x3c3053;
      _0x1bbf65.updateTime = _0x191c6a.timestamp;
      if (_0x1bbf65.player) {
        if (_0x1bbf65.player.isMe) {
          _0x636d0a = true;
        }
        if (_0x2a8efc) {
          _0x1bbf65.player.lastUpdate = _0x1dacf1;
        }
      }
    }
    if (_0x2a8efc) {
      _0x191c6a.replay.addHistory(_0x1dacf1);
    }
    for (_0x191c6a.state.isAlive = _0x636d0a; _0x4c5485 = _0x1dacf1.getUint32(_0x534f18, true), _0x534f18 += 4, _0x4c5485 !== 0;) {
      if (_0x104ccd[_0x4c5485]) {
        _0x104ccd[_0x4c5485].destroy();
      }
    }
    for (; _0x4c5485 = _0x1dacf1.getUint32(_0x534f18, true), _0x534f18 += 4, _0x4c5485 !== 0;) {
      var _0x55a5e6 = _0x104ccd[_0x4c5485];
      var _0x24cdae = _0x1dacf1.getUint32(_0x534f18, true);
      _0x534f18 += 4;
      var _0xe3d0a3 = _0x104ccd[_0x24cdae];
      if (_0x55a5e6) {
        if (_0xe3d0a3) {
          _0x55a5e6.destroy(_0x5081bd.eatAnimation);
          _0x55a5e6.ox = _0x55a5e6.x;
          _0x55a5e6.oy = _0x55a5e6.y;
          _0x55a5e6.oSize = _0x55a5e6.size;
          var _0x300cd9 = _0x55a5e6.size / _0xe3d0a3.nSize;
          _0x300cd9 = _0x300cd9 < 0 ? 0 : _0x300cd9 > 1 ? 1 : _0x300cd9;
          _0x55a5e6.newPositionScale = _0x300cd9;
          _0x55a5e6.nx = _0xe3d0a3.x;
          _0x55a5e6.ny = _0xe3d0a3.y;
          _0x55a5e6.nSize = 0;
          _0x55a5e6.updateTime = _0x191c6a.timestamp;
        } else {
          _0x55a5e6.destroy();
        }
      } else if (!_0x191c6a.replaying) {
        console.warn("Prey not found:", _0x4c5485);
      }
    }
    for (let _0x15dd7e of [].concat(_0x2d42ea)) {
      if (_0x15dd7e.pid && _0x15dd7e.updateTime + 1000 < _0x191c6a.timestamp) {
        _0x15dd7e.destroy();
      }
    }
  };
}, function (_0xc4e5d9, _0x3d0c1a, _0x31dbe3) {
  _0x3d0c1a.PlayerCell = _0x31dbe3(147);
  _0x3d0c1a.Food = _0x31dbe3(148);
  _0x3d0c1a.Virus = _0x31dbe3(149);
  _0x3d0c1a.EjectedMass = _0x31dbe3(150);
  _0x3d0c1a.DeadCell = _0x31dbe3(151);
  _0x3d0c1a.Crown = _0x31dbe3(152);
}, function (_0x58bd62, _0x48d509, _0x476dc4) {
  var _0x396284 = _0x476dc4(16);
  _0x58bd62.exports = class extends _0x396284 {
    constructor(_0x4619a7, _0x34a8d9) {
      super(_0x4619a7);
      this.player = _0x34a8d9;
      this.pid = _0x34a8d9.pid;
      if (_0x34a8d9.hasCrown) {
        this.addCrown();
      }
    }
    addCrown() {
      if (this.crownSprite) {
        console.error("addCrown: crown already exists");
      } else {
        var _0x51805f;
        var _0x1e20e2 = this.game.crownPool;
        if (_0x1e20e2.length) {
          _0x51805f = _0x1e20e2.pop();
        } else {
          (_0x51805f = PIXI.Sprite.from("/img/crown.png")).scale.set(0.7);
          _0x51805f.pivot.set(0, 643);
          _0x51805f.anchor.x = 0.5;
          _0x51805f.rotation = -0.5;
          _0x51805f.alpha = 0.7;
        }
        this.crownSprite = _0x51805f;
        this.sprite.addChild(_0x51805f);
      }
    }
    removeCrown() {
      var _0x4847f8 = this.crownSprite;
      if (_0x4847f8) {
        this.sprite.removeChild(_0x4847f8);
        this.game.crownPool.push(_0x4847f8);
        this.crownSprite = null;
      } else {
        console.error("removeCrown: crown doesnt exist");
      }
    }
    onUpdate() {
      var _0xaa0832;
      var _0x36d55d = this.game.settings;
      if (_0x36d55d.namesEnabled && !this.nameSprite && this.player && this.player.nameSprite) {
        this.nameSprite = new PIXI.Sprite(this.player.nameSprite.texture);
        this.nameSprite.anchor.set(0.5);
        this.sprite.addChild(this.nameSprite);
      }
      if (_0x36d55d.showMass && !this.massText) {
        this.massText = this.game.massTextPool.shift() || ((_0xaa0832 = new PIXI.BitmapText("", {
          font: "75px Mass Font",
          align: "right"
        })).anchor.x = 0.5, _0xaa0832.anchor.y = -0.45, _0xaa0832);
        this.sprite.addChild(this.massText);
      }
      var _0x294cba = this.game.cameraScale * this.size * this.game.renderer.resolution;
      if (this.crownSprite) {
        this.crownSprite.visible = _0x294cba > 16;
      }
      var _0x555976 = _0x294cba > 40;
      if (this.nameSprite) {
        this.nameSprite.visible = _0x36d55d.namesEnabled && _0x555976;
      }
      if (this.massText) {
        if (_0x36d55d.showMass && _0x555976) {
          var _0x299b30 = this.getMass();
          if (_0x36d55d.shortMass) {
            _0x299b30 = this.game.getShortMass(_0x299b30);
          }
          this.massText.text = _0x299b30;
          this.massText.visible = true;
        } else if (this.massText.visible) {
          this.massText.visible = false;
        }
      }
    }
    onDestroy() {
      if (this.massText) {
        this.sprite.removeChild(this.massText);
        this.game.massTextPool.push(this.massText);
      }
      if (this.crownSprite) {
        this.removeCrown();
      }
    }
  };
}, function (_0x295bd3, _0x169016, _0x26d2d1) {
  _0x26d2d1(1);
  var _0x408996 = _0x26d2d1(16);
  var _0x3dc425 = _0x26d2d1(13);
  var _0x553e25 = _0x26d2d1(72).neon;
  _0x295bd3.exports = class extends _0x408996 {
    constructor(_0x57fef0) {
      var _0x2051b1 = _0x553e25[_0x57fef0.id % _0x553e25.length];
      _0x57fef0.texture = _0x3dc425.cells.getTexture(_0x2051b1);
      super(_0x57fef0);
    }
  };
}, function (_0x209a57, _0x8c76f7, _0xae8979) {
  _0xae8979(1);
  var _0x50b60c = _0xae8979(16);
  var _0x344f0e = _0xae8979(13);
  _0x209a57.exports = class extends _0x50b60c {
    constructor(_0x28ec66) {
      _0x28ec66.texture = _0x344f0e.virus.getTexture();
      super(_0x28ec66);
    }
  };
}, function (_0x14bd7b, _0x30a8a3, _0x449e88) {
  _0x449e88(1);
  var _0x14e709 = _0x449e88(16);
  var _0x3df374 = _0x449e88(13);
  _0x14bd7b.exports = class extends _0x14e709 {
    constructor(_0x5317a8) {
      _0x5317a8.texture = _0x3df374.cells.getTexture(16753920);
      super(_0x5317a8);
    }
  };
}, function (_0x1aa221, _0x452463, _0x457d53) {
  _0x457d53(1);
  var _0x48eb8e = _0x457d53(16);
  var _0x24010a = _0x457d53(13);
  _0x1aa221.exports = class extends _0x48eb8e {
    constructor(_0xa00f3b) {
      _0xa00f3b.texture = _0x24010a.cells.getTexture(4210752);
      super(_0xa00f3b);
      this.sprite.alpha = 0.5;
    }
  };
}, function (_0x40d69b, _0x3aa646, _0x290ff9) {
  var _0x4652c9 = _0x290ff9(16);
  _0x290ff9(13);
  _0x40d69b.exports = class extends _0x4652c9 {
    constructor(_0x3d2fb6) {
      _0x3d2fb6.texture = PIXI.Texture.from("/img/crown.png");
      super(_0x3d2fb6);
      this.sprite.alpha = 0.7;
    }
  };
}, function (_0x34c097, _0x7dbd31) {
  _0x34c097.exports = function (_0x16395a) {
    var _0x4d2279 = 1;
    var _0xf166d2 = _0x16395a.getUint16(_0x4d2279, true);
    _0x4d2279 += 2;
    var _0x4ad820 = "";
    for (var _0xf26fc8 = ""; (_0xf26fc8 = _0x16395a.getUint8(_0x4d2279)) != 0;) {
      _0x4d2279 += 1;
      _0x4ad820 += String.fromCharCode(_0xf26fc8);
    }
    return {
      pid: _0xf166d2,
      text: decodeURIComponent(_0x4ad820)
    };
  };
}, function (_0xecc312, _0x20bc76) {
  _0xecc312.exports = function (_0x2dbe74) {
    var _0x9b89fa = 1;
    for (var _0xb2471 = [];;) {
      var _0x5dbd46 = _0x2dbe74.getUint16(_0x9b89fa, true);
      _0x9b89fa += 2;
      if (!_0x5dbd46) {
        break;
      }
      var _0x377659 = _0x2dbe74.getUint8(_0x9b89fa, true) / 255;
      _0x9b89fa += 1;
      var _0x583224 = _0x2dbe74.getUint8(_0x9b89fa, true) / 255;
      _0x9b89fa += 1;
      _0xb2471.push({
        pid: _0x5dbd46,
        x: _0x377659,
        y: _0x583224
      });
    }
    return _0xb2471;
  };
}, function (_0x305c69, _0x496900) {
  _0x305c69.exports = function (_0x226d66, _0x5971a5) {
    var _0x56d341 = 1;
    for (var _0x342ec8 = [];;) {
      var _0x157667 = _0x5971a5.getUint16(_0x56d341, true);
      _0x56d341 += 2;
      if (!_0x157667) {
        break;
      }
      var _0x52d59d = _0x226d66.playerManager.getPlayer(_0x157667);
      if (_0x52d59d) {
        _0x342ec8.push({
          text: _0x52d59d.name,
          color: _0x52d59d.nameColorCss || "#ffffff"
        });
      }
    }
    return _0x342ec8;
  };
}, function (_0x5bedea, _0x2293f7, _0x4d34a1) {},,, function (_0x732325, _0x292182, _0x21bbeb) {}, function (_0x24d7e0, _0xde9141, _0x18be1e) {
  var _0x830409 = _0x18be1e(1);
  _0x18be1e(161);
  var _0x34dd47 = _0x18be1e(59);
  var _0x180cd9 = _0x18be1e(7);
  var _0x373b6d = _0x830409.renderer.view;
  var _0x2118ae = {};
  var _0x5b1812 = localStorage.adminMode;
  var _0x44d302 = /firefox/i.test(navigator.userAgent) ? "DOMMouseScroll" : "wheel";
  function _0x18f121() {
    var _0x1a111e = _0x830409.actions.findPlayerUnderMouse();
    var _0x253c98 = _0x1a111e && _0x1a111e.player;
    if (_0x253c98) {
      _0x830409.events.$emit("context-menu", event, _0x253c98);
    }
  }
  function _0xa69885() {
    _0x830409.scene.setPosition();
  }
  function _0x1072fd(_0x38869b) {
    _0x830409.rawMouse.x = _0x38869b.clientX;
    _0x830409.rawMouse.y = _0x38869b.clientY;
    _0x830409.updateMouse();
  }
  function _0x17832c(_0x301e26) {
    _0x301e26.preventDefault();
    _0x373b6d.focus();
    if (_0x301e26.shiftKey && _0x5b1812 && _0x830409.selectedPlayer && _0x301e26.button === 0) {
      _0x830409.sendChatMessage("/teleport " + _0x830409.selectedPlayer + " " + _0x830409.mouse.x + " " + _0x830409.mouse.y);
    } else {
      var _0x12173c = "MOUSE" + _0x301e26.button;
      if (_0x830409.spectating && _0x301e26.button === 0) {
        var _0x35058c = _0x830409.actions.findPlayerUnderMouse();
        if (_0x35058c) {
          _0x830409.actions.spectate(_0x35058c.pid);
        }
      } else {
        _0x34dd47.press(_0x12173c);
      }
    }
  }
  function _0x16b2ae(_0x109c51) {
    var _0x34570f = "MOUSE" + _0x109c51.button;
    _0x34dd47.release(_0x34570f);
    _0x2118ae[_0x34570f] = false;
  }
  function _0x1f03e6(_0x522a3d) {
    var _0x4ebaea = _0x522a3d.target === _0x373b6d;
    if (_0x4ebaea || _0x522a3d.target === document.body) {
      var _0x2c741d = _0x34dd47.convertKey(_0x522a3d.key);
      if (!(_0x2c741d === "TAB" && _0x522a3d.ctrlKey || _0x2118ae[_0x2c741d])) {
        _0x2118ae[_0x2c741d] = true;
        if (_0x2c741d !== "ESCAPE") {
          if (_0x2c741d !== "ENTER") {
            if (_0x522a3d.shiftKey && _0x5b1812) {
              if (_0x2c741d === "V") {
                _0x830409.sendChatMessage("/virus " + _0x830409.mouse.x + " " + _0x830409.mouse.y);
              }
              if (_0x830409.selectedPlayer) {
                if (_0x2c741d === "F") {
                  _0x830409.sendChatMessage("/freeze " + _0x830409.selectedPlayer);
                }
                if (_0x2c741d === "H") {
                  _0x830409.sendChatMessage("/invisible " + _0x830409.selectedPlayer);
                }
                if (_0x2c741d === "G") {
                  _0x830409.sendChatMessage("/god " + _0x830409.selectedPlayer);
                }
                if (_0x2c741d === "K") {
                  (function (_0x379614) {
                    var _0x411946 = _0x830409.playerManager.players[_0x379614];
                    if (!_0x411946) {
                      return;
                    }
                    var _0x129b48 = "Kick player \"" + htmlEncode(_0x411946.name) + "\"";
                    _0x180cd9.confirm(_0x129b48, () => {
                      _0x830409.sendChatMessage("/kick " + _0x379614);
                    });
                  })(_0x830409.selectedPlayer);
                }
                if (_0x2c741d === "B") {
                  (function (_0x369278) {
                    var _0x4d676c = _0x830409.playerManager.players[_0x369278];
                    if (!_0x4d676c) {
                      return;
                    }
                    _0x180cd9.instance.fire({
                      input: "text",
                      showCancelButton: true,
                      confirmButtonText: "Ban",
                      html: "Ban player \"" + htmlEncode(_0x4d676c.name) + "\"<br>Enter reason (optional):"
                    }).then(_0x5db574 => {
                      var _0x1eda3e = _0x5db574.value;
                      if (_0x5db574.value !== undefined) {
                        _0x830409.sendChatMessage("/ban " + _0x369278 + (_0x1eda3e ? " " + _0x1eda3e : ""));
                      }
                    });
                  })(_0x830409.selectedPlayer);
                }
                if (_0x2c741d === "N") {
                  (function (_0x416e06) {
                    var _0x278d54 = _0x830409.playerManager.players[_0x416e06];
                    if (!_0x278d54) {
                      return;
                    }
                    _0x180cd9.instance.fire({
                      input: "text",
                      showCancelButton: true,
                      confirmButtonText: "Send",
                      html: "Send notification to player \"" + htmlEncode(_0x278d54.name) + "\""
                    }).then(_0x5db574 => {
                      var _0x1eda3e = _0x5db574.value;
                      if (_0x1eda3e) {
                        _0x830409.sendChatMessage("/notify " + _0x416e06 + " " + _0x1eda3e);
                      }
                    });
                  })(_0x830409.selectedPlayer);
                }
                if (_0x2c741d === "M") {
                  (function (_0x5f07f9) {
                    var _0x42f6af = _0x830409.playerManager.players[_0x5f07f9];
                    if (!_0x42f6af) {
                      return;
                    }
                    var _0x859f53 = "Mute player \"" + htmlEncode(_0x42f6af.name) + "\"";
                    _0x180cd9.confirm(_0x859f53, () => {
                      _0x830409.sendChatMessage("/mute " + _0x5f07f9);
                    });
                  })(_0x830409.selectedPlayer);
                }
              }
              return;
            } else {
              if (_0x4ebaea && _0x34dd47.press(_0x2c741d)) {
                _0x522a3d.preventDefault();
              }
              return;
            }
          }
          _0x830409.events.$emit("chat-focus");
        } else if (_0x830409.replaying) {
          _0x2118ae = {};
          _0x830409.stop();
          _0x830409.showMenu(true);
        } else {
          _0x830409.toggleMenu();
        }
      }
    }
  }
  function _0x496a58(_0x863fc4) {
    var _0x5eb9a0 = _0x34dd47.convertKey(_0x863fc4.key);
    _0x34dd47.release(_0x5eb9a0);
    _0x2118ae[_0x5eb9a0] = false;
  }
  function _0x1f0ae9(_0x2440bb) {
    if (_0x2440bb.shiftKey && _0x5b1812 && _0x830409.selectedPlayer) {
      if (_0x2440bb.wheelDelta < 0) {
        _0x830409.sendChatMessage("/mass " + _0x830409.selectedPlayer + " -1500");
      } else {
        _0x830409.sendChatMessage("/mass " + _0x830409.selectedPlayer + " +1500");
      }
    } else {
      _0x830409.actions.zoom(_0x2440bb);
    }
  }
  _0x830409.eventListeners = function (_0x1d9c8b) {
    if (_0x1d9c8b) {
      window.addEventListener("resize", _0xa69885);
      _0x373b6d.addEventListener("mousedown", _0x17832c);
      _0x373b6d.addEventListener(_0x44d302, _0x1f0ae9);
      _0x373b6d.addEventListener("contextmenu", _0x18f121);
      document.addEventListener("mouseup", _0x16b2ae);
      document.body.addEventListener("mousemove", _0x1072fd);
      document.body.addEventListener("keydown", _0x1f03e6);
      document.body.addEventListener("keyup", _0x496a58);
      window.onbeforeunload = () => "Are you sure you want to close the page?";
    } else {
      window.removeEventListener("resize", _0xa69885);
      _0x373b6d.removeEventListener("mousedown", _0x17832c);
      _0x373b6d.removeEventListener(_0x44d302, _0x1f0ae9);
      _0x373b6d.removeEventListener("contextmenu", _0x18f121);
      document.removeEventListener("mouseup", _0x16b2ae);
      document.body.removeEventListener("mousemove", _0x1072fd);
      document.body.removeEventListener("keydown", _0x1f03e6);
      document.body.removeEventListener("keyup", _0x496a58);
      window.onbeforeunload = null;
    }
  };
}, function (_0x85604b, _0xfd1356, _0x103ac8) {
    
var _0x16f333 = _0x103ac8(1);
var _0x2acc72 = _0x103ac8(6);
    // --- BU SATIRDAN İTİBAREN KOPYALAYIP ESKİSİNİN YERİNE YAPIŞTIR (3339. Satır civarı) ---
    var _0x2a0bfa = _0x16f333.actions = {};

    // YENİ YARDIMCI FONKSİYON: freezeMouseEquivalent
    // "Daha iyi" istemcideki freezeMouse fonksiyonunun işlevselliğini taklit eder.
    // YENİ YARDIMCI FONKSİYON: freezeMouseEquivalent
    // "Daha iyi" istemcideki freezeMouse fonksiyonunun işlevselliğini taklit eder.
    // YENİ YARDIMCI FONKSİYON: freezeMouseEquivalent
    _0x2a0bfa.freezeMouseEquivalent = function (shouldFreeze) {
        if (typeof shouldFreeze === 'undefined') {
            shouldFreeze = !_0x16f333.mouseFrozen;
        }

        if (_0x16f333.running) {
            if (shouldFreeze) {
                // Zaman damgası ekle - split fonksiyonunda linesplit içinden çağrılıp çağrılmadığını algılamak için
                _0x16f333.lastFreezeMouseTime = Date.now();
                
                _0x2a0bfa.stopMovement(false);
                _0x2a0bfa.lockLinesplit(false);

                _0x16f333.updateMouse();
                var _0x42d83b_mouse_data = _0x16f333.mouse;
                var targetX = _0x42d83b_mouse_data.x;
                var targetY = _0x42d83b_mouse_data.y;
                var _0x2bd297_packet = prepareData(9);
                _0x2bd297_packet.setUint8(0, 16);
                _0x2bd297_packet.setInt32(1, targetX, true);
                _0x2bd297_packet.setInt32(5, targetY, true);
                _0x16f333.send(_0x2bd297_packet);
            }
            _0x16f333.mouseFrozen = shouldFreeze;
            if (_0x16f333.events && typeof _0x16f333.events.$emit === 'function') {
                _0x16f333.events.$emit("update-cautions", {
                    mouseFrozen: shouldFreeze
                });
            }
        }
    };

    // Mevcut spectate fonksiyonu
    _0x2a0bfa.spectate = _0xb19b04 => {
        _0x16f333.spectating = true;
        var _0x48b632 = prepareData(_0xb19b04 ? 3 : 1);
        _0x48b632.setUint8(0, 2);
        if (_0xb19b04) {
            _0x48b632.setInt16(1, _0xb19b04, true);
        }
        _0x16f333.send(_0x48b632);
    };

    // Mevcut spectateLockToggle fonksiyonu
    _0x2a0bfa.spectateLockToggle = function () {
        _0x16f333.sendUint8(10);
    };

    // Mevcut move fonksiyonu
    _0x2a0bfa.move = () => {
        // Periyodik olarak en büyük hücre bilgisini iste
        if (!_0x16f333.largestCellRequestLastTime || Date.now() - _0x16f333.largestCellRequestLastTime > 250) {
            // Sunucuya en büyük hücre bilgisi için paket gönder
            let largestCellInfoPacket = new DataView(new ArrayBuffer(1));
            largestCellInfoPacket.setUint8(0, 31); // Request largest cell info opcode
            _0x16f333.send(largestCellInfoPacket);
            _0x16f333.largestCellRequestLastTime = Date.now();
        }

        var _0x42d83b = _0x16f333.mouse;
        var _0x2bd297 = prepareData(9);
        _0x2bd297.setUint8(0, 16);
        _0x2bd297.setInt32(1, _0x42d83b.x, true);
        _0x2bd297.setInt32(5, _0x42d83b.y, true);
        _0x16f333.send(_0x2bd297);
    };

    // Mevcut feed fonksiyonu
    _0x2a0bfa.feed = function (_0x42e227) {
        var _0x314604;
        if (arguments.length) {
            (_0x314604 = prepareData(2)).setUint8(0, 21);
            _0x314604.setUint8(1, +_0x42e227);
        } else {
            (_0x314604 = prepareData(1)).setUint8(0, 21);
        }
        _0x16f333.send(_0x314604);
    };

    // Mevcut stopMovement fonksiyonu
    _0x2a0bfa.stopMovement = function (_0x1c5ee4) {
        if (typeof _0x1c5ee4 === 'undefined') {
            _0x1c5ee4 = !_0x16f333.moveToCenterOfCells;
        }
        if (_0x1c5ee4) {
            _0x2a0bfa.lockLinesplit(false);
        }
        _0x16f333.moveToCenterOfCells = _0x1c5ee4;
    };

    // GÜNCELLENMİŞ lockLinesplit FONKSİYONU (Opcode 18 eklendi)
    _0x2a0bfa.lockLinesplit = function (shouldLock) {
        if (_0x16f333.spectating) {
            return; // Gözlemci modunda işlem yapma
        }

        let intendedLockState;
        if (typeof shouldLock === 'undefined') {
            // Argüman yoksa, mevcut durumu tersine çevir (toggle)
            intendedLockState = !_0x16f333.stopMovePackets;
        } else {
            // Argüman varsa, onu kullan
            intendedLockState = shouldLock;
        }

        if (intendedLockState !== _0x16f333.stopMovePackets || !intendedLockState) {
            if (intendedLockState) {
                // --- Kilidi AÇMAK için (intendedLockState true) ---
                _0x16f333.updateMouse(); // Fare koordinatlarını güncelle (sets _0x16f333.mouse.x, .y)

                const originalMouseX = _0x16f333.mouse.x;
                const originalMouseY = _0x16f333.mouse.y;

                let playerCenterX = 0;
                let playerCenterY = 0;
                let playerCellCount = 0;

                // Sunucudan en büyük hücre bilgisini iste
                let largestCellInfoPacket = new DataView(new ArrayBuffer(1));
                largestCellInfoPacket.setUint8(0, 31); // Request largest cell info opcode
                _0x16f333.send(largestCellInfoPacket);
                
                // Önce sunucudan gelen en büyük hücre bilgisini kontrol et
                if (_0x16f333.largestCellX !== undefined && _0x16f333.largestCellY !== undefined) {
                    // Sunucudan gelen en büyük hücreyi kullan
                    playerCenterX = _0x16f333.largestCellX;
                    playerCenterY = _0x16f333.largestCellY;
                    playerCellCount = 1; // Sadece bir hücre kullanılıyor
                } 
                // Eğer sunucudan gelen bilgi yoksa, en büyük hücreyi client tarafında bul
                else {
                    // Sadece en büyük hücreyi bul
                    let largestCell = null;
                    let largestMass = 0;
                    
                    if (_0x16f333.nodelist && typeof _0x16f333.activePid !== 'undefined') {
                        for (let i = 0; i < _0x16f333.nodelist.length; i++) {
                            const node = _0x16f333.nodelist[i];
                            // Düğümün varlığını, pid ve kaldırılmamış olduğunu kontrol et
                            if (node && typeof node.pid !== 'undefined' && node.pid === _0x16f333.activePid && !node.isRemoved) {
                                const mass = node.getMass ? node.getMass() : (node.size * node.size / 100);
                                if (mass > largestMass) {
                                    largestMass = mass;
                                    largestCell = node;
                                }
                            }
                        }
                    }
                    
                    if (largestCell) {
                        playerCenterX = largestCell.x;
                        playerCenterY = largestCell.y;
                        playerCellCount = 1; // Sadece bir hücre kullanılıyor
                    } else {
                        // Eğer en büyük hücre bulunamazsa, tüm hücrelerin ortalamasını al (fallback)
                        if (_0x16f333.nodelist && typeof _0x16f333.activePid !== 'undefined') {
                            for (let i = 0; i < _0x16f333.nodelist.length; i++) {
                                const node = _0x16f333.nodelist[i];
                                if (node && typeof node.pid !== 'undefined' && node.pid === _0x16f333.activePid &&
                                    typeof node.x === 'number' && typeof node.y === 'number' && !node.isRemoved) {
                                    playerCenterX += node.x;
                                    playerCenterY += node.y;
                                    playerCellCount++;
                                }
                            }
                        }
                        
                        if (playerCellCount > 0) {
                            playerCenterX /= playerCellCount;
                            playerCenterY /= playerCellCount;
                        }
                    }
                }

                if (playerCellCount > 0) {
                    // Oyuncu merkezinden orijinal fare pozisyonuna olan vektörü hesapla
                    const dirX = originalMouseX - playerCenterX;
                    const dirY = originalMouseY - playerCenterY;

                    // Hücre büyüklüğüne göre mesafe çarpanını ayarla 
                    let LOCK_DISTANCE_MULTIPLIER = 15;
                    if (_0x16f333.largestCellSize !== undefined) {
                        // Hücre büyüdükçe mesafe çarpanını azalt
                        const sizeAdaptiveFactor = Math.max(0.5, 1.0 - (_0x16f333.largestCellSize / 400));
                        LOCK_DISTANCE_MULTIPLIER = LOCK_DISTANCE_MULTIPLIER * sizeAdaptiveFactor;
                    }
                    
                    // Yeni hedef koordinatlarını ayarla
                    _0x16f333.mouse.x = playerCenterX + dirX * LOCK_DISTANCE_MULTIPLIER;
                    _0x16f333.mouse.y = playerCenterY + dirY * LOCK_DISTANCE_MULTIPLIER;
                }
                // Eğer oyuncu hücresi bulunamazsa veya fare oyuncu merkezindeyse,
                // _0x16f333.mouse.x/y orijinal değerlerini korur (veya playerCenterX/Y olur),
                // ve _0x2a0bfa.move() bu koordinatları kullanır.

                _0x2a0bfa.move(); // Modifiye edilmiş veya orijinal fare pozisyonunu sunucuya gönder (kilitleme hedefi olarak)

                // Diğer istemci tarafı mantıklar için orijinal fare koordinatlarını geri yükle
                _0x16f333.mouse.x = originalMouseX;
                _0x16f333.mouse.y = originalMouseY;

                _0x16f333.sendUint8(15); // Hat kilidini AÇ (opcode 15)
                _0x16f333.sendUint8(18); // YENİ: Lock Linesplit için özel opcode 18 gönder
                _0x2a0bfa.stopMovement(false); // Normal "hücrelerin ortasına git" özelliğini kapat
                _0x16f333.stopMovePackets = true; // İstemci içi durumu güncelle
            } else {
                // --- Kilidi KAPATMAK için (intendedLockState false) ---
                _0x16f333.stopMovePackets = false; // İstemci içi durumu güncelle
                _0x16f333.updateMouse(); // Fare koordinatlarını güncelle
                _0x2a0bfa.move();       // Normal bir fare hareketi paketi gönder.
            }
        }
        // Burada UI güncellemesi için event emit eklenebilir (_0x16f333.events.$emit...)
    };

    // GÜNCELLENMİŞ linesplit FONKSİYONU (Hedef uzaklığı ayarlaması için)
    _0x2a0bfa.linesplit = () => {
        // Linesplit tuşuna basma sayacını takip et (global bir değişken olarak)
        if (typeof _0x16f333.linesplitPressCount === 'undefined') {
            _0x16f333.linesplitPressCount = 0;
        }
        _0x16f333.linesplitPressCount++;
        
        // Sayaç için zamanlayıcı - 1 saniye sonra sayacı sıfırla
        if (_0x16f333.linesplitPressResetTimer) {
            clearTimeout(_0x16f333.linesplitPressResetTimer);
        }
        _0x16f333.linesplitPressResetTimer = setTimeout(() => {
            _0x16f333.linesplitPressCount = 0;
            delete _0x16f333.linesplitPressResetTimer;
        }, 1000);
        
        // Linesplit aktif bayrağını ayarla - split fonksiyonlarında kontrol edilecek
        _0x16f333.lastLinesplitTime = Date.now();
        
        // Linesplit sonrası split sayacını sıfırla
        _0x16f333.splitsAfterLinesplitCount = 0;
        
        // Linesplit aktif durum izleyicisini temizle (eğer varsa)
        if (_0x16f333.linesplitActiveTimeout) {
            clearTimeout(_0x16f333.linesplitActiveTimeout);
        }
        
        // 2 saniye sonra linesplit aktif bayrağını sıfırla
        _0x16f333.linesplitActiveTimeout = setTimeout(() => {
            delete _0x16f333.lastLinesplitTime;
            delete _0x16f333.linesplitActiveTimeout;
            delete _0x16f333.splitsAfterLinesplitCount;
        }, 2000);

        _0x2a0bfa.freezeMouseEquivalent(true);

        var _0x4e826e;
        var _0x3e989d;
        var _0x21c192_current_mouse = { x: _0x16f333.mouse.x, y: _0x16f333.mouse.y };
        
        var targetFound = false;
        
        // Sunucudan gelen en büyük hücre bilgisini kullan (eğer varsa)
        if (_0x16f333.largestCellX !== undefined && _0x16f333.largestCellY !== undefined) {
            var _0x5d50c9 = _0x21c192_current_mouse.x - _0x16f333.largestCellX;
            var _0x35e7e6 = _0x21c192_current_mouse.y - _0x16f333.largestCellY;
            var _0x1ea420 = _0x5d50c9 * _0x5d50c9 + _0x35e7e6 * _0x35e7e6;
            if (_0x1ea420 > 1e-6) {
                _0x4e826e = _0x5d50c9;
                _0x3e989d = _0x35e7e6;
                targetFound = true;
            }
        } 
        // Eğer sunucudan bilgi yoksa, client tarafında en büyüğü bul (fallback)
        else {
            var largestCell = null;
            var largestMass = 0;
            var _0x3d07c4 = _0x16f333.nodelist;
            var _0x90c504 = _0x16f333.activePid;
            
            for (var _0x2e0534 = 0; _0x2e0534 < _0x3d07c4.length; _0x2e0534++) {
                var _0xd88ef3 = _0x3d07c4[_0x2e0534];
                if (_0xd88ef3.pid === _0x90c504) {
                    var mass = _0xd88ef3.getMass();
                    if (mass > largestMass) {
                        largestMass = mass;
                        largestCell = _0xd88ef3;
                    }
                }
            }
            
            // Sadece en büyük hücre için hesapla
            if (largestCell && largestMass > 0) {
                var _0x5d50c9 = _0x21c192_current_mouse.x - largestCell.x;
                var _0x35e7e6 = _0x21c192_current_mouse.y - largestCell.y;
                var _0x1ea420 = _0x5d50c9 * _0x5d50c9 + _0x35e7e6 * _0x35e7e6;
                if (_0x1ea420 > 1e-6) {
                    _0x4e826e = _0x5d50c9;
                    _0x3e989d = _0x35e7e6;
                    targetFound = true;
                }
            }
        }
        if (targetFound) {
            var _0x6227bc = Math.atan2(_0x3e989d, _0x4e826e);
            
            // Adaptif mesafe faktörü - hücre boyutuna göre değişir
            let LINESPLIT_AIM_DISTANCE_FACTOR = 15000; // Varsayılan değer
            
            // Sunucudan gelen en büyük hücre boyutunu kullan (eğer varsa)
            if (_0x16f333.largestCellSize !== undefined) {
                // Hücre büyüdükçe mesafe faktörünü azalt
                const sizeAdaptiveFactor = Math.max(0.4, 1.0 - (_0x16f333.largestCellSize / 500)); // Minimum %40 mesafe
                LINESPLIT_AIM_DISTANCE_FACTOR = LINESPLIT_AIM_DISTANCE_FACTOR * sizeAdaptiveFactor;
            }
            
            // Güncellenen faktörle mouse konumunu hesapla
            _0x16f333.mouse.x = _0x21c192_current_mouse.x + Math.cos(_0x6227bc) * LINESPLIT_AIM_DISTANCE_FACTOR;
            _0x16f333.mouse.y = _0x21c192_current_mouse.y + Math.sin(_0x6227bc) * LINESPLIT_AIM_DISTANCE_FACTOR;
        }

        _0x2a0bfa.lockLinesplit(true); // Activate line lock

        // Capture raw mouse coordinates *before* the split command, if available.
        var preSplitRawMouseX, preSplitRawMouseY;
        var canCheckRawMouse = typeof _0x16f333.rawMouse !== 'undefined' && _0x16f333.rawMouse !== null;

        if (canCheckRawMouse) {
            preSplitRawMouseX = _0x16f333.rawMouse.x;
            preSplitRawMouseY = _0x16f333.rawMouse.y;
            
            // Eğer birden fazla basıldıysa, raw mouse koordinatlarını hafifçe değiştir
            if (_0x16f333.linesplitPressCount > 1 && _0x16f333.rawMouse) {
                // Raw mouse koordinatlarını 1 pixel değiştir - bu, lock line'ı otomatik devre dışı bırakacak
                _0x16f333.rawMouse.x += 1;
                _0x16f333.rawMouse.y += 1;
                
                // Konsola bilgi yazdır (debug için)
                if (window.console && console.log) {
                    console.log(".");
                }
            }
        }

        if (targetFound) {
            _0x2a0bfa.split(3); // Perform the split
        }

        // --- IMMEDIATE MOUSE MOVEMENT CHECK ---
        // Check if mouse moved between capturing preSplitRawMouse and now (after split command).
        var mouseMovedImmediately = false;
        if (canCheckRawMouse) {
            if (_0x16f333.rawMouse.x !== preSplitRawMouseX || _0x16f333.rawMouse.y !== preSplitRawMouseY) {
                mouseMovedImmediately = true;
            }
        }

        // Clear any existing timers/intervals for line lock state management from previous calls
        if (_0x16f333.lineLockReleaseTimeout) {
            clearTimeout(_0x16f333.lineLockReleaseTimeout);
            delete _0x16f333.lineLockReleaseTimeout;
        }
        if (_0x16f333.lineLockMouseMonitorInterval) {
            clearInterval(_0x16f333.lineLockMouseMonitorInterval);
            delete _0x16f333.lineLockMouseMonitorInterval;
        }
        // Clear previously stored coordinates
        delete _0x16f333.lineLockInitialRawMouseX;
        delete _0x16f333.lineLockInitialRawMouseY;


        if (mouseMovedImmediately) {
            // Mouse moved during the split action, so unlock immediately.
            _0x2a0bfa.lockLinesplit(false);
            // No need to set up timers or store lineLockInitialRawMouseX/Y on _0x16f333,
            // as they have been cleared above and won't be used.
        } else {
            // Mouse did not move immediately, or rawMouse check is not possible.
            // Proceed with interval and timeout based locking.

            // Store initial raw mouse position on _0x16f333 if we are proceeding with timed lock and canCheckRawMouse.
            // These are the pre-split coordinates.
            if (canCheckRawMouse) {
                _0x16f333.lineLockInitialRawMouseX = preSplitRawMouseX;
                _0x16f333.lineLockInitialRawMouseY = preSplitRawMouseY;
            }

            // Interval to check for mouse movement (using raw client coordinates)
            // This interval is only set up if initial raw mouse coordinates were successfully stored.
            if (typeof _0x16f333.lineLockInitialRawMouseX === 'number' && typeof _0x16f333.lineLockInitialRawMouseY === 'number') {
                _0x16f333.lineLockMouseMonitorInterval = setInterval(() => {
                    // If lock is no longer active (e.g., released by timeout or other means), stop monitoring.
                    if (!_0x16f333.stopMovePackets) {
                        clearInterval(_0x16f333.lineLockMouseMonitorInterval);
                        delete _0x16f333.lineLockMouseMonitorInterval;
                        // Clean up stored coordinates as they are no longer needed for this lock instance
                        if (typeof _0x16f333.lineLockInitialRawMouseX !== 'undefined') delete _0x16f333.lineLockInitialRawMouseX;
                        if (typeof _0x16f333.lineLockInitialRawMouseY !== 'undefined') delete _0x16f333.lineLockInitialRawMouseY;
                        return;
                    }

                    // Check for actual mouse movement against stored raw coordinates.
                    if (typeof _0x16f333.rawMouse !== 'undefined' && _0x16f333.rawMouse !== null &&
                        (_0x16f333.rawMouse.x !== _0x16f333.lineLockInitialRawMouseX ||
                            _0x16f333.rawMouse.y !== _0x16f333.lineLockInitialRawMouseY)) {

                        _0x2a0bfa.lockLinesplit(false); // Unlock the line due to mouse movement

                        // Clear the main timeout, as mouse movement has pre-empted it
                        if (_0x16f333.lineLockReleaseTimeout) {
                            clearTimeout(_0x16f333.lineLockReleaseTimeout);
                            delete _0x16f333.lineLockReleaseTimeout;
                        }

                        // Stop this interval and clean up associated state
                        clearInterval(_0x16f333.lineLockMouseMonitorInterval);
                        delete _0x16f333.lineLockMouseMonitorInterval;
                        if (typeof _0x16f333.lineLockInitialRawMouseX !== 'undefined') delete _0x16f333.lineLockInitialRawMouseX;
                        if (typeof _0x16f333.lineLockInitialRawMouseY !== 'undefined') delete _0x16f333.lineLockInitialRawMouseY;
                    }
                }, 10); // Check every 10ms
            }


            // Timeout to automatically release the lock after 900ms if no mouse movement (or if mouse check is inactive)
            _0x16f333.lineLockReleaseTimeout = setTimeout(() => {
                // If lock already released (e.g., by mouse movement interval), just ensure cleanup and exit
                if (!_0x16f333.stopMovePackets) {
                    if (_0x16f333.lineLockMouseMonitorInterval) { // If interval was running, clear it
                        clearInterval(_0x16f333.lineLockMouseMonitorInterval);
                        delete _0x16f333.lineLockMouseMonitorInterval;
                    }
                    // Clean up stored coordinates if they haven't been already
                    if (typeof _0x16f333.lineLockInitialRawMouseX !== 'undefined') delete _0x16f333.lineLockInitialRawMouseX;
                    if (typeof _0x16f333.lineLockInitialRawMouseY !== 'undefined') delete _0x16f333.lineLockInitialRawMouseY;

                    if (_0x16f333.lineLockReleaseTimeout) delete _0x16f333.lineLockReleaseTimeout; // Clean up self
                    return;
                }

                // If timeout occurs and lock is still active, unlock and clean up associated state
                _0x2a0bfa.lockLinesplit(false);

                if (_0x16f333.lineLockMouseMonitorInterval) { // If interval was running, clear it
                    clearInterval(_0x16f333.lineLockMouseMonitorInterval);
                    delete _0x16f333.lineLockMouseMonitorInterval;
                }
                // Clean up stored coordinates
                if (typeof _0x16f333.lineLockInitialRawMouseX !== 'undefined') delete _0x16f333.lineLockInitialRawMouseX;
                if (typeof _0x16f333.lineLockInitialRawMouseY !== 'undefined') delete _0x16f333.lineLockInitialRawMouseY;

                if (_0x16f333.lineLockReleaseTimeout) delete _0x16f333.lineLockReleaseTimeout; // Clean up self

            }, 900); // Original timeout duration for automatic release
        }

        // Timeout for unfreezing mouse control (related to freezeMouseEquivalent)
        if (_0x16f333.linesplitUnlock) {
            clearTimeout(_0x16f333.linesplitUnlock);
        }
        _0x16f333.linesplitUnlock = setTimeout(() => {
            if (_0x16f333.linesplitUnlock) {
                delete _0x16f333.linesplitUnlock;
            }
            _0x2a0bfa.freezeMouseEquivalent(false);
        }, 1); // Delay changed to 1ms as per instruction
    };

    // Güncellenmiş split fonksiyonu - linesplit'i kontrol eder
    _0x2a0bfa.split = _0x5c692d => {
        // Linesplit sonrası normal bir split yapılırsa, lockLine'ı devre dışı bırak
        const isAfterLinesplit = _0x16f333.lastLinesplitTime && (Date.now() - _0x16f333.lastLinesplitTime < 2000);
        
        // Eğer bu fonksiyon linesplit içinden çağrılıyorsa işlem yapma
        // linesplit içinde çağrılma durumunu algılamak için callstack kontrolüne benzer bir yaklaşım:
        // Eğer son 50ms içinde freezeMouseEquivalent(true) çağrıldıysa, muhtemelen linesplit içindeyiz
        const isCalledFromLinesplit = _0x16f333.lastFreezeMouseTime && (Date.now() - _0x16f333.lastFreezeMouseTime < 50);
        
        // Linesplit sonrası split sayacını takip et
        if (isAfterLinesplit && !isCalledFromLinesplit) {
            // Sayacı başlat (eğer yoksa)
            if (typeof _0x16f333.splitsAfterLinesplitCount === 'undefined') {
                _0x16f333.splitsAfterLinesplitCount = 0;
            }
            
            // Split sayacını artır
            _0x16f333.splitsAfterLinesplitCount++;
            
            // İlk 2 spliti yoksay (linesplit'in kendisi ve hemen sonraki bir split)
            // Sadece 2 ya da daha fazla split yapıldığında lockLine'ı devre dışı bırak
            if (_0x16f333.splitsAfterLinesplitCount > 0 && _0x16f333.stopMovePackets) {
                // LockLine'ı devre dışı bırak
                if (window.console && console.log) {
                    console.log("Multiple splits after linesplit detected, disabling lockLine");
                }
                _0x2a0bfa.lockLinesplit(false);
            }
        }
        
        if (!_0x16f333.stopMovePackets) {
            _0x2a0bfa.move();
        }
        var msg = prepareData(2);
        msg.setUint8(0, 17);
        msg.setUint8(1, _0x5c692d);
        _0x16f333.send(msg);
        _0x16f333.splitCount += _0x5c692d;
        if (_0x16f333.splitCount <= 2) {
            _0x16f333.moveWaitUntil = Date.now() + 300;
        } else {
            _0x16f333.moveWaitUntil = 0;
            _0x16f333.splitCount = 0;
        }
    };
    // --- KOPYALAMAYI BU SATIRDAN ÖNCE BİTİR (3444. Satır civarı) ---
  _0x2a0bfa.switchMultibox = function () {
    if (_0x16f333.state.isAlive) {
      _0x16f333.stopMovePackets = false;
     // _0x16f333.sendUint8(8);
      _0x16f333.sendUint8(23);
    }
  };

  _0x2a0bfa.requestCreateDual = function () { // New function to request dual player creation
    console.log("requestCreateDual");
    if (_0x16f333.state.isAlive) {
      _0x16f333.stopMovePackets = false;
      _0x16f333.sendUint8(25); // RequestCreateDual
    }
  };

  _0x2a0bfa.zoom = _0x3e7355 => {
    var _0x43a277 = 1 - _0x2acc72.cameraZoomSpeed / 100;
    var _0x2ad815 = 0;
    if (_0x3e7355.wheelDelta) {
      _0x2ad815 = _0x3e7355.wheelDelta / -120;
    } else if (_0x3e7355.detail) {
      _0x2ad815 = _0x3e7355.detail / 3;
    }
    var _0x1b4ada = Math.pow(_0x43a277, _0x2ad815);
    var _0x451a42 = (_0x16f333.zoom * _0x1b4ada).clamp(_0x16f333.zoomMin, 1);
    _0x16f333.zoom = _0x451a42;
  };
  _0x2a0bfa.setZoomLevel = function (_0x1be819) {
    var _0x2438b2 = 0.8 / Math.pow(2, _0x1be819 - 1) * _0x16f333.zoomScale;
    _0x16f333.zoom = _0x2438b2;
  };
  _0x2a0bfa.targetPlayer = () => {
    var _0x195a8a = _0x2a0bfa.findPlayerUnderMouse(true);
    if (_0x195a8a) {
      _0x16f333.selectedPlayer = _0x195a8a.pid;
    }
  };
  _0x2a0bfa.findPlayerUnderMouse = _0x330a8d => {
    var _0x3f999f = _0x16f333.mouse;
    var _0x12ec74 = null;
    var _0x12e5d0 = Infinity;
    var _0x260a74 = _0x16f333.nodelist.filter(_0x2a91e4 => _0x2a91e4.pid).sort((_0x1addae, _0x47c103) => _0x1addae.size - _0x47c103.size);
    for (var _0x325893 = 0; _0x325893 < _0x260a74.length; _0x325893++) {
      var _0x5143ea = _0x260a74[_0x325893];
      var _0x4f79fb = _0x5143ea.x - _0x3f999f.x;
      var _0x4b615c = _0x5143ea.y - _0x3f999f.y;
      var _0x1e58b0 = Math.sqrt(Math.abs(_0x4f79fb * _0x4f79fb + _0x4b615c * _0x4b615c)) - _0x5143ea.size;
      if (_0x330a8d) {
        if (_0x1e58b0 < _0x12e5d0) {
          _0x12e5d0 = _0x1e58b0;
          _0x12ec74 = _0x5143ea;
        }
      } else if (_0x1e58b0 <= 0) {
        return _0x5143ea;
      }
    }
    return _0x12ec74;
  };
  _0x2a0bfa.toggleSkins = function (_0x295ec9) {
    _0x295ec9 = _0x295ec9 === undefined ? !_0x2acc72.skinsEnabled : _0x295ec9;
    _0x2acc72.set("skinsEnabled", _0x295ec9);
    _0x16f333.playerManager.onSkinsChanged(_0x295ec9);
  };
  _0x2a0bfa.toggleNames = function (_0x5daacd) {
    _0x5daacd = _0x5daacd === undefined ? !_0x2acc72.namesEnabled : _0x5daacd;
    _0x2acc72.set("namesEnabled", _0x5daacd);
  };
  _0x2a0bfa.toggleFood = function (_0x37eba3) {
    _0x37eba3 = _0x37eba3 === undefined ? !_0x2acc72.foodVisible : _0x37eba3;
    _0x2acc72.set("foodVisible", _0x37eba3);
    _0x16f333.scene.food.visible = _0x37eba3;
  };
  _0x2a0bfa.toggleHud = function () {
    var _0x5a8fbf = !window.app.showHud;
    window.app.showHud = _0x5a8fbf;
    _0x2acc72.set("showHud", _0x5a8fbf);
  };
  _0x2a0bfa.toggleChat = function () {
    var _0x43e486 = !_0x2acc72.showChat;
    _0x2acc72.set("showChat", _0x43e486);
    if (_0x16f333.running) {
      _0x16f333.events.$emit("chat-visible", _0x43e486);
    }
  };
  _0x2a0bfa.toggleMass = function () {
    var _0x366b34 = !_0x2acc72.showMass;
    _0x2acc72.set("showMass", _0x366b34);
  };
},,,,,,,,,,,,,,,,, function (_0x1ce78a, _0x1a0785, _0x3d19d0) {
  'use strict';

  var _0x4d5b99 = _0x3d19d0(29);
  _0x3d19d0.n(_0x4d5b99).a;
}, function (_0x1d4071, _0x2e4296, _0x5a9ecc) {}, function (_0xd44d96, _0x1c5ae6, _0x4e5e8b) {
  'use strict';

  var _0x4d9399 = _0x4e5e8b(32);
  _0x4e5e8b.n(_0x4d9399).a;
}, function (_0x3050ca, _0x1c88d4, _0xda118b) {}, function (_0x4da2da, _0x41e131) {
  _0x4da2da.exports = new class {
    constructor() {
      this.seenList = this.parseSeen(localStorage.seenNotifications);
    }
    parseSeen(_0x3cadd8) {
      if (!_0x3cadd8) {
        return [];
      }
      try {
        var _0x432299 = JSON.parse(_0x3cadd8);
        if (Array.isArray(_0x432299)) {
          return _0x432299;
        }
      } catch (_0x184efd) {
        console.error("notifications.parseSeen:", _0x184efd.message);
      }
      return [];
    }
    saveSeen() {
      try {
        localStorage.seenNotifications = JSON.stringify(this.seenList);
      } catch (_0x39dd78) {
        console.error("notifications.saveSeen:", _0x39dd78.message);
      }
    }
    isSeen(_0x363abd) {
      return this.seenList.includes(_0x363abd);
    }
    setSeen(_0x2f020c) {
      if (this.isSeen(_0x2f020c)) {
        console.warn("Key \"" + _0x2f020c + "\" is already on the seen list");
      } else {
        this.seenList.push(_0x2f020c);
        this.saveSeen();
      }
    }
    ifNotSeen(_0x244190, _0x2a49af) {
      if (!this.isSeen(_0x244190)) {
        _0x2a49af(this.setSeen.bind(this, _0x244190));
      }
    }
  }();
}, function (_0x12c3ac, _0x9f3e35, _0x337357) {
  'use strict';

  var _0x2a3b9b = _0x337357(33);
  _0x337357.n(_0x2a3b9b).a;
}, function (_0x450cd6, _0x40745e, _0x50b97c) {}, function (_0x1656c, _0x249f2d, _0x5dffc8) {
  'use strict';

  var _0x8d7d79 = _0x5dffc8(34);
  _0x5dffc8.n(_0x8d7d79).a;
}, function (_0x280ff9, _0x566e65, _0x3f2d1f) {},,,,,, function (_0x2b9a89, _0x120b65) {},, function (_0x543bd7, _0x2ed341) {},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,, function (_0x23fe84, _0x18a8d6, _0x2831c1) {
  'use strict';

  var _0x4c3bba = _0x2831c1(37);
  _0x2831c1.n(_0x4c3bba).a;
}, function (_0x5aef08, _0xf8d626, _0x5e7d86) {}, function (_0x517bf9, _0x1e0dcc, _0x184186) {
  'use strict';

  var _0x1eb442 = _0x184186(38);
  _0x184186.n(_0x1eb442).a;
}, function (_0x8048e3, _0x92b184, _0x43f504) {}, function (_0x2db587, _0x162169, _0x1eef99) {
  'use strict';

  var _0x11ba74 = _0x1eef99(39);
  _0x1eef99.n(_0x11ba74).a;
}, function (_0x46260f, _0x840ae1, _0x3ed100) {}, function (_0xd7222b, _0x4b1f09, _0x1e20b6) {
  'use strict';

  var _0x431044 = _0x1e20b6(40);
  _0x1e20b6.n(_0x431044).a;
}, function (_0x3e9ad8, _0x36223e, _0x85cd2d) {}, function (_0x2de385, _0x552893, _0x2a690a) {
  var _0x116768 = _0x2a690a(19);
  var _0x5a655a = localStorage.vanisToken || null;
  _0x2de385.exports = new class {
    constructor(_0x4173eb, _0x2a68ba) {
      this.url = _0x4173eb;
      this.vanisToken = _0x2a68ba;
    }
    setToken(_0x30e4e8) {
      this.vanisToken = _0x30e4e8;
      localStorage.vanisToken = _0x30e4e8;
    }
    clearToken() {
      this.vanisToken = null;
      delete localStorage.vanisToken;
    }
    async call(_0x56cfa2, _0x2c20ea) {
      return (await _0x116768({
        method: _0x56cfa2,
        url: this.url + _0x2c20ea,
        headers: {
          Authorization: "Vanis " + this.vanisToken
        }
      })).data;
    }
    get(_0xe8261e) {
      return this.call("GET", _0xe8261e);
    }
  }("https://vanis.fun/api", _0x5a655a);
}, function (_0x492a25, _0x32a1d4) {
  _0x492a25.exports = {
    getXp: function (_0x1da530) {
      return Math.round(_0x1da530 * _0x1da530 / 0.010000000000000002);
    },
    getLevel: function (_0x360161) {
      return Math.floor(Math.sqrt(_0x360161) * 0.1);
    }
  };
}, function (_0xd48b21, _0x17292b, _0xfb4c05) {
  'use strict';

  var _0x542905 = _0xfb4c05(41);
  _0xfb4c05.n(_0x542905).a;
}, function (_0x1135ef, _0x43f66e, _0x300125) {}, function (_0x383df5, _0x4ac10e, _0x4164e2) {
  'use strict';

  var _0x1a3d3f = _0x4164e2(42);
  _0x4164e2.n(_0x1a3d3f).a;
}, function (_0x19db01, _0x2dd631, _0x51123a) {}, function (_0xdf7328, _0x3ed4b6, _0x3b5866) {
  'use strict';

  var _0x2ab90f = _0x3b5866(43);
  _0x3b5866.n(_0x2ab90f).a;
}, function (_0x578775, _0x564a4a, _0x181aa4) {}, function (_0x2c8e97, _0x337490, _0x1bfd76) {
  'use strict';

  var _0x2d2c81 = _0x1bfd76(44);
  _0x1bfd76.n(_0x2d2c81).a;
}, function (_0x1cb2fd, _0xf3cdeb, _0x3fa008) {}, function (_0x1502b0, _0x560dfb, _0x459848) {
  'use strict';

  var _0x84d038 = _0x459848(45);
  _0x459848.n(_0x84d038).a;
}, function (_0x2986e7, _0x2e782a, _0x431c1e) {}, function (_0x4aaeff, _0x403ecd, _0x230acb) {
  'use strict';

  var _0x59ff0f = _0x230acb(46);
  _0x230acb.n(_0x59ff0f).a;
}, function (_0x3c8cf1, _0x3aa274, _0x47c70f) {}, function (_0xc0cff2, _0x2d4f6b, _0x25eca1) {
  'use strict';

  var _0x19cde5 = _0x25eca1(47);
  _0x25eca1.n(_0x19cde5).a;
}, function (_0xeae85c, _0x841aef, _0x135bbf) {}, function (_0x5c9951, _0x114e94, _0x47c9d8) {
  'use strict';

  var _0x863838 = _0x47c9d8(48);
  _0x47c9d8.n(_0x863838).a;
}, function (_0x10e4a0, _0xb5c502, _0x684488) {}, function (_0xe01b58, _0x5643b9, _0x4b7cc6) {
  'use strict';

  var _0x547d38 = _0x4b7cc6(49);
  _0x4b7cc6.n(_0x547d38).a;
}, function (_0x58b4bf, _0x3d9853, _0x5a3956) {}, function (_0x5d4659, _0x1fdcf2, _0x407bb2) {
  'use strict';

  var _0xef52bb = _0x407bb2(52);
  _0x407bb2.n(_0xef52bb).a;
}, function (_0x5e3661, _0x1b1e98, _0x1551ae) {}, function (_0x4e8dfe, _0x30795f, _0x589512) {
  'use strict';

  var _0x122a43 = _0x589512(53);
  _0x589512.n(_0x122a43).a;
}, function (_0x3fc73a, _0x363bae, _0x3d39bb) {}, function (_0x5b5b66, _0x217775, _0x32f6eb) {
  'use strict';

  var _0x394fb8 = _0x32f6eb(54);
  _0x32f6eb.n(_0x394fb8).a;
}, function (_0x20e4a3, _0x31ca00, _0x362b20) {}, function (_0x52178d, _0x202092, _0x54acf4) {
  'use strict';

  var _0x4832ea = _0x54acf4(55);
  _0x54acf4.n(_0x4832ea).a;
}, function (_0x402b28, _0x52b3e4, _0x409bde) {}, function (_0x386d3f, _0x19243b, _0x31873c) {
  'use strict';

  var _0x74db72 = _0x31873c(56);
  _0x31873c.n(_0x74db72).a;
}, function (_0x40edd5, _0x5e7dc8, _0xf6cdab) {}, function (_0x3ed3f6, _0x499388, _0x5806da) {
  'use strict';

  var _0x55faa3 = _0x5806da(57);
  _0x5806da.n(_0x55faa3).a;
}, function (_0x224431, _0x5210a4, _0x2e8197) {}, function (_0x2957e5, _0x128910, _0x3812b4) {
  var _0x418a8c;
  var _0x26015f;
  var _0x51e484;
  var _0x48520e;
  var _0x3929d9 = _0x3812b4(1);
  var _0xbe3622 = document.getElementById("starfield");
  var _0x2c5622 = _0xbe3622.getContext("2d");
  function _0x2aa841() {
    _0x418a8c = _0xbe3622.width = window.innerWidth;
    _0x26015f = _0xbe3622.height = window.innerHeight;
    _0x51e484 = _0x418a8c / 2;
    _0x48520e = _0x26015f / 2;
  }
  window.addEventListener("resize", _0x2aa841);
  _0x2aa841();
  class _0xce82bd {
    constructor(_0x3ba2ef) {
      this.spawn(_0x3ba2ef);
    }
    spawn(_0x5bf9a7) {
      this.x = _0x5bf9a7.x;
      this.y = _0x5bf9a7.y;
      this.angle = Math.atan2(this.y, this.x);
      this.radius = 0.1;
      this.speed = 0.4 + Math.random() * 3.3;
    }
    update(_0x186402) {
      var _0x306d3c = this.speed * _0x186402;
      this.x += Math.cos(this.angle) * _0x306d3c;
      this.y += Math.sin(this.angle) * _0x306d3c;
      this.radius += _0x306d3c * 0.0035;
    }
  }
  var _0x5da353 = [];
  for (var _0x50dd40 = 0; _0x50dd40 < 220; _0x50dd40++) {
    var _0x449085 = {
      x: Math.random() * _0x418a8c * 2 - _0x418a8c,
      y: Math.random() * _0x26015f * 2 - _0x26015f
    };
    _0x5da353.push(new _0xce82bd(_0x449085));
  }
  function _0x3494e3(_0x486c2d) {
    _0x2c5622.beginPath();
    _0x2c5622.fillStyle = "#00b8ff";
    _0x2c5622.globalAlpha = 0.9;
    _0x5da353.forEach(_0x3080b7 => {
      _0x3080b7.update(_0x486c2d);
      if (function (_0x9d22d5) {
        var _0xee4a8f = _0x51e484 + _0x9d22d5.radius;
        var _0x1c76e4 = _0x48520e + _0x9d22d5.radius;
        return _0x9d22d5.x < -_0xee4a8f || _0x9d22d5.x > _0xee4a8f || _0x9d22d5.y < -_0x1c76e4 || _0x9d22d5.y > _0x1c76e4;
      }(_0x3080b7)) {
        _0x3080b7.spawn({
          x: Math.random() * _0x418a8c * 2 - _0x418a8c,
          y: Math.random() * _0x26015f * 2 - _0x26015f
        });
      }
      _0x2c5622.moveTo(_0x3080b7.x, _0x3080b7.y);
      _0x2c5622.arc(_0x3080b7.x, _0x3080b7.y, _0x3080b7.radius, 0, Math.PI * 2);
    });
    _0x2c5622.fill();
  }
  var _0x58fd97 = 0;
  var _0x3fe34e = 0;
  // TOLOOK
  setTimeout(function _0x1e89e0(_0x6aefcc) {
    if (_0x3929d9.running) {
      window.removeEventListener("resize", _0x2aa841);
      _0xbe3622.parentNode.removeChild(_0xbe3622);
      return;
    }
    var _0x30e72e = window.performance && window.performance.now ? window.performance.now() : Date.now();
    if (!_0x58fd97) {
      _0x58fd97 = _0x3fe34e = _0x30e72e;
    }
    _0x6aefcc = (_0x30e72e - _0x3fe34e) / 6;
    var _0x2da42b = _0x30e72e - _0x58fd97 - 550;
    if (_0x2da42b > 0) {
      var _0x3b9b3b = _0x2da42b / 1000;
      if (_0x3b9b3b > 1.2) {
        _0x3b9b3b = 1.2;
      }
      _0x6aefcc /= Math.pow(3, _0x3b9b3b);
    }
    requestAnimationFrame(_0x1e89e0);
    _0x2c5622.clearRect(0, 0, _0x418a8c, _0x26015f);
    _0x2c5622.save();
    _0x2c5622.translate(_0x51e484, _0x48520e);
    _0x3494e3(_0x6aefcc);
    _0x2c5622.restore();
    _0x3fe34e = _0x30e72e;
  }, 100);
}, function (_0x223c7b, _0x4223e8, _0x2afb1) {
  'use strict';

  _0x2afb1.r(_0x4223e8);
  var _0x5a34d3 = _0x2afb1(23);
  var _0x475f64 = _0x2afb1.n(_0x5a34d3);
  var _0x2148ed = _0x2afb1(112);
  var _0x47a0fe = _0x2afb1.n(_0x2148ed);
  function _0x2500ed() {
    var _0x94de33 = this.$createElement;
    var _0x327788 = this._self._c || _0x94de33;
    return _0x327788("transition", {
      attrs: {
        name: this.isModalOpen || this.gameState.isAlive ? "" : "menu"
      }
    }, [_0x327788("div", {
      attrs: {
        id: "main-container"
      }
    }, [_0x327788("div", {
      staticClass: "bar"
    }, [_0x327788("div", {
      attrs: {
        id: "vanis-io_728x90"
      }
    })]), this._v(" "), _0x327788("servers", {
      staticClass: "fade-box two"
    }), this._v(" "), _0x327788("player-container", {
      staticClass: "fade-box two",
      on: {
        "modal-open": this.onModalChange
      }
    }), this._v(" "), _0x327788("account", {
      staticClass: "fade-box"
    }), this._v(" "), _0x327788("skins", {
      staticClass: "fade-box"
    })], 1)]);
  }
  _0x2500ed._withStripped = true;
  function _0x4edce3() {
    var _0x3d440a = this;
    var _0x3144de = _0x3d440a.$createElement;
    var _0xe2ef0e = _0x3d440a._self._c || _0x3144de;
    return _0xe2ef0e("div", {
      attrs: {
        id: "tab-menu"
      }
    }, [_0xe2ef0e("div", {
      staticClass: "tabs"
    }, _0x3d440a._l(_0x3d440a.regionCodes, function (_0x3f5c4c, _0x29e1ac) {
      return _0xe2ef0e("div", {
        key: _0x29e1ac,
        staticClass: "tab",
        class: {
          active: _0x3d440a.selectedRegion === _0x3f5c4c
        },
        on: {
          click: function (_0x5a0758) {
            return _0x3d440a.selectRegion(_0x3f5c4c);
          }
        }
      }, [_0x3f5c4c === "AS" ? _0xe2ef0e("span", {
        staticClass: "new-badge"
      }, [_0x3d440a._v("NEW")]) : _0x3d440a._e(), _0x3d440a._v("\r\n            " + _0x3d440a._s(_0x3f5c4c) + "\n        ")]);
    }), 0), _0x3d440a._v(" "), _0xe2ef0e("div", {
      staticClass: "server-list"
    }, [_0x3d440a._l(_0x3d440a.regionServers, function (_0x4b3eb1, _0x4a0c65) {
      return _0xe2ef0e("div", {
        key: _0x4a0c65,
        staticClass: "vanis-list-item",
        class: {
          active: _0x3d440a.gameState.connectionUrl === _0x4b3eb1.url,
          "cursor-loading": _0x3d440a.connectWait
        },
        on: {
          click: function (_0x8d7bc1) {
            _0x3d440a.connect(_0x4b3eb1.url);
            _0x3d440a.disableAutoConnect();
          }
        }
      }, [_0xe2ef0e("div", {
        staticClass: "server-name"
      }, [_0x3d440a._v(_0x3d440a._s(_0x4b3eb1.name))]), _0x3d440a._v(" "), _0xe2ef0e("div", [_0x3d440a._v(_0x3d440a._s(_0x4b3eb1.currentPlayers) + " / " + _0x3d440a._s(_0x4b3eb1.maxPlayers))])]);
    }), _0x3d440a._v(" "), _0x3d440a.error ? _0xe2ef0e("div", {
      staticClass: "server-load-error"
    }, [_0x3d440a._v("Failed to load servers")]) : _0x3d440a._e()], 2)]);
  }
  _0x4edce3._withStripped = true;
  var _0x1f0830 = _0x2afb1(1);
  var _0x4a8914 = _0x2afb1(7);
  var _0x508257 = {
    data: () => ({
      regionCodes: ["EU"],
      connectWait: false,
      gameState: _0x1f0830.state,
      selectedRegion: "",
      error: null,
      servers: []
    }),
    created() {
      _0x1f0830.events.$on("connect-server", this.connect);
      this.loadServers(_0x78c993 => {});
      this.interval = // TOLOOK
      setInterval(() => {
        this.loadServers();
      }, 60000);
      this.getRegionCode(_0x9de9e => {});
    },
    destroyed() {
      clearInterval(this.interval);
    },
    computed: {
      regionServers: function () {
        return this.servers;
      }
    },
    methods: {
      disableAutoConnect() {
        localStorage.disableAutoConnect = true;
      },
      connectEmptyFFA() {
        var _0x7e70b5 = this.regionServers.filter(_0x55e4b4 => _0x55e4b4.gameMode === "FFA").sort((_0x2f70d1, _0x4be096) => _0x2f70d1.currentPlayers - _0x4be096.currentPlayers);
        if (!_0x7e70b5.length) {
          return false;
        }
        this.connect(_0x7e70b5[0].url);
      },
      selectRegion(_0x345edf) {
        localStorage.regionCode = _0x345edf;
        this.selectedRegion = _0x345edf;
      },
      getRegionCode(_0x4d19c8) {},
      connect(_0x1abe02) {
        if (!this.connectWait) {
          this.connectWait = true;
          _0x4a8914.toast.close();
          this.checkBadSkinUrl();
          _0x1f0830.connect(_0x1abe02);
          // TOLOOK
          setTimeout(() => {
            this.connectWait = false;
          }, 1200);
        }
      },
      checkBadSkinUrl() {
        var _0x31bfb9 = document.getElementById("skinurl").value;
        if (_0x31bfb9 && !_0x31bfb9.startsWith("https://i.imgur.com")) {
          _0x4a8914.toast.fire({
            type: "error",
            title: "Invalid skin url! Use Imgur skins.",
            timer: 5000
          });
        }
      },
      loadServers() {
        //eşşek
        this.servers = [{
          name: "Instant",
          domain: "localhost",
          port: 3004,
          gameMode: "Omgasplit",
          currentPlayers: 31,
          maxPlayers: 60,
          url: "wss://eu.vanis.fun/4/"
        }, {
          name: "Crazy",
          domain: "localhost",
          port: 3003,
          gameMode: "Omgasplit",
          currentPlayers: 31,
          maxPlayers: 60,
          url: "wss://eu.vanis.fun/5/"
        }, {
          name: "Gigapenis",
          domain: "ogarcpp.yuu.studio",
          port: 3001,
          gameMode: "Pogsplit",
          currentPlayers: 31,
          maxPlayers: 60,
          url: "ws://localhost:3000"
        }, {
          name: "Megapenis",
          domain: "localhost",
          port: 3000,
          gameMode: "Omgasplit",
          currentPlayers: 31,
          maxPlayers: 60,
          url: "wss://eu.vanis.fun/1/"
        }, {         
          name: "Self-Feed",
          domain: "ogarcpp.yuu.studio",
          port: 3002,
          gameMode: "Pogsplit",
          currentPlayers: 31,
          maxPlayers: 60,
          url: "wss://eu.vanis.fun/3/"
        }];
        this.error = null;
      }
    }
  };
  _0x2afb1(178);
  var _0x4db777 = _0x2afb1(0);
  var _0x3a1076 = Object(_0x4db777.a)(_0x508257, _0x4edce3, [], false, null, "0647fbb0", null);
  _0x3a1076.options.__file = "src/components/servers.vue";
  var _0x3fa86f = _0x3a1076.exports;
  function _0x7427c3() {
    var _0x2db106 = this;
    var _0x2b5d20 = _0x2db106.$createElement;
    var _0x15ef8a = _0x2db106._self._c || _0x2b5d20;
    return _0x15ef8a("div", {
      attrs: {
        id: "player-container"
      }
    }, [_0x15ef8a("div", {
      staticClass: "tabs"
    }, [_0x15ef8a("i", {
      staticClass: "tab fas fa-cog",
      on: {
        click: function (_0x55a4bd) {
          return _0x2db106.openModal("settings");
        }
      }
    }), _0x2db106._v(" "), _0x15ef8a("i", {
      staticClass: "tab far fa-keyboard",
      on: {
        click: function (_0x5c0a5d) {
          return _0x2db106.openModal("hotkeys");
        }
      }
    }), _0x2db106._v(" "), _0x15ef8a("i", {
      staticClass: "tab fas fa-film",
      on: {
        click: function (_0x15a84b) {
          return _0x2db106.openModal("replays3");
        }
      }
    })]), _0x2db106._v(" "), _0x15ef8a("div", {
      attrs: {
        id: "player-data"
      }
    }, [_0x2db106._m(0), _0x2db106._v(" "), _0x15ef8a("div", {
      staticClass: "row"
    }, [_0x15ef8a("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: _0x2db106.nickname,
        expression: "nickname"
      }],
      staticStyle: {
        flex: "2",
        "min-width": "1px"
      },
      attrs: {
        id: "nickname",
        type: "text",
        placeholder: "Nickname",
        maxlength: "15"
      },
      domProps: {
        value: _0x2db106.nickname
      },
      on: {
        change: _0x2db106.onNicknameChange,
        input: function (_0x194c6c) {
          if (!_0x194c6c.target.composing) {
            _0x2db106.nickname = _0x194c6c.target.value;
          }
        }
      }
    }), _0x2db106._v(" "), _0x15ef8a("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: _0x2db106.teamtag,
        expression: "teamtag"
      }],
      staticStyle: {
        flex: "1",
        "min-width": "1px"
      },
      attrs: {
        id: "teamtag",
        type: "text",
        placeholder: "Tag",
        maxlength: "15"
      },
      domProps: {
        value: _0x2db106.teamtag
      },
      on: {
        change: _0x2db106.onTeamTagChange,
        input: function (_0x1baf35) {
          if (!_0x1baf35.target.composing) {
            _0x2db106.teamtag = _0x1baf35.target.value;
          }
        }
      }
    })]), _0x2db106._v(" "), _0x15ef8a("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: _0x2db106.skinUrl,
        expression: "skinUrl"
      }],
      attrs: {
        id: "skinurl",
        type: "text",
        placeholder: "Skin Url",
        maxlength: "40"
      },
      domProps: {
        value: _0x2db106.skinUrl
      },
      on: {
        change: _0x2db106.onSkinUrlChange,
        input: function (_0x2d6714) {
          if (!_0x2d6714.target.composing) {
            _0x2db106.skinUrl = _0x2d6714.target.value;
          }
        }
      }
    }), _0x2db106._v(" "), _0x15ef8a("div", {
      attrs: {
        id: "game-buttons"
      }
    }, [_0x15ef8a("button", {
      attrs: {
        id: "play-button",
        disabled: !_0x2db106.gameState.playButton || _0x2db106.gameState.loadingAds
      },
      on: {
        click: _0x2db106.play
      }
    }, [_0x2db106.gameState.loadingAds ? _0x15ef8a("i", {
      staticClass: "fas fa-sync fa-spin"
    }) : [_0x2db106._v("Play")]], 2), _0x2db106._v(" "), _0x15ef8a("button", {
      attrs: {
        id: "spec-button",
        disabled: _0x2db106.gameState.isAlive || !_0x2db106.gameState.playButton || _0x2db106.gameState.loadingAds
      },
      on: {
        click: function (_0x48831a) {
          return _0x2db106.spectate();
        }
      }
    }, [_0x15ef8a("i", {
      staticClass: "fa fa-eye"
    })])])]), _0x2db106._v(" "), _0x2db106.activeModal === "settings" ? _0x15ef8a("modal", {
      on: {
        close: function (_0x4774a6) {
          return _0x2db106.closeModal();
        }
      }
    }, [_0x15ef8a("settings")], 1) : _0x2db106._e(), _0x2db106._v(" "), _0x2db106.activeModal === "hotkeys" ? _0x15ef8a("modal", {
      on: {
        close: function (_0x546b86) {
          return _0x2db106.closeModal();
        }
      }
    }, [_0x15ef8a("hotkeys")], 1) : _0x2db106._e(), _0x2db106._v(" "), _0x2db106.activeModal === "replays3" ? _0x15ef8a("modal", {
      staticStyle: {
        "margin-left": "-316px",
        width: "962px"
      },
      on: {
        close: function (_0x62845d) {
          return _0x2db106.closeModal();
        }
      }
    }, [_0x15ef8a("replays3")], 1) : _0x2db106._e()], 1);
  }
  _0x7427c3._withStripped = true;
  var _0xcd66ac = _0x2afb1(113);
  function _0x303986() {
    var _0x57727a = this;
    var _0x4b3bea = _0x57727a.$createElement;
    var _0x2bc734 = _0x57727a._self._c || _0x4b3bea;
    return _0x2bc734("div", {
      staticClass: "settings-container"
    }, [
      _0x2bc734("div", {
        staticClass: "section"
      }, [
        _0x2bc734("div", {
          staticClass: "header"
        }, [
          _0x2bc734("p-check", {
            staticClass: "p-switch",
            attrs: {
              disabled: !_0x57727a.isWebGLSupported
            },
            on: {
              change: function(_0x30e8b2) {
                return _0x57727a.toggle("useWebGL");
              }
            },
            model: {
              value: _0x57727a.useWebGL,
              callback: function(_0x10c95c) {
                _0x57727a.useWebGL = _0x10c95c;
              },
              expression: "useWebGL"
            }
          }, [
            _0x57727a._v("GPU Rendering\n                "),
            _0x57727a.isWebGLSupported ? _0x57727a._e() : [_0x57727a._v("(unsupported)")]
          ], 2)
        ], 1),
        _0x57727a._v(" "),
        _0x2bc734("div", {
          staticClass: "options"
        }, [
          _0x2bc734("p-check", {
            staticClass: "p-switch",
            attrs: {
              disabled: false
            },
            on: {
              change: function(_0x4619c3) {
                return _0x57727a.toggle("showBackgroundImage");
              }
            },
            model: {
              value: _0x57727a.showBackgroundImage,
              callback: function(_0x23d6b0) {
                _0x57727a.showBackgroundImage = _0x23d6b0;
              },
              expression: "showBackgroundImage"
            }
          }, [_0x57727a._v("Background Image")]),
          _0x57727a._v(" "),
          _0x2bc734("input", {
            directives: [{
              name: "model",
              rawName: "v-model",
              value: _0x57727a.backgroundImageUrl,
              expression: "backgroundImageUrl"
            }],
            attrs: {
              type: "text",
              disabled: !_0x57727a.showBackgroundImage,
              placeholder: "Background image URL"
            },
            domProps: {
              value: _0x57727a.backgroundImageUrl
            },
            on: {
              blur: function(_0x39a8e3) {
                return _0x57727a.toggle("backgroundImageUrl");
              },
              input: function(_0x150958) {
                if (!_0x150958.target.composing) {
                  _0x57727a.backgroundImageUrl = _0x150958.target.value;
                }
              }
            }
          }),
          _0x57727a._v(" "),
          _0x2bc734("p-check", {
            staticClass: "p-switch",
            attrs: {
              disabled: !_0x57727a.showBackgroundImage
            },
            on: {
              change: function(_0x30e213) {
                return _0x57727a.toggle("backgroundImageRepeat");
              }
            },
            model: {
              value: _0x57727a.backgroundImageRepeat,
              callback: function(_0x134360) {
                _0x57727a.backgroundImageRepeat = _0x134360;
              },
              expression: "backgroundImageRepeat"
            }
          }, [_0x57727a._v("Background Repetile")]),
          _0x57727a._v(" "),
          _0x2bc734("p-check", {
            staticClass: "p-switch",
            attrs: {
              disabled: !_0x57727a.showBackgroundImage
            },
            on: {
              change: function(_0xb8a784) {
                return _0x57727a.toggle("backgroundDefaultIfUnequal");
              }
            },
            model: {
              value: _0x57727a.backgroundDefaultIfUnequal,
              callback: function(_0x236887) {
                _0x57727a.backgroundDefaultIfUnequal = _0x236887;
              },
              expression: "backgroundDefaultIfUnequal"
            }
          }, [_0x57727a._v("Use Default on Unequal Maps")]),
          _0x57727a._v(" "),
          _0x2bc734("div", {
            class: {
              "disabled-content": !_0x57727a.showBackgroundImage
            }
          }, [
            _0x57727a._v("\n                Background Opacity: " + _0x57727a._s(_0x57727a.backgroundImageOpacity) + "\r\n                "),
            _0x2bc734("input", {
              staticClass: "slider",
              attrs: {
                type: "range",
                min: "0.1",
                max: "1",
                step: "0.01"
              },
              domProps: {
                value: _0x57727a.backgroundImageOpacity
              },
              on: {
                input: function(_0x5744ef) {
                  return _0x57727a.backgroundOpacityChange(_0x5744ef);
                }
              }
            })
          ]),
          _0x57727a._v(" "),
          _0x2bc734("div", {
            staticStyle: {
              display: "flex"
            }
          }, [
            _0x2bc734("div", {
              staticStyle: {
                "white-space": "nowrap",
                "margin-right": "8px",
                "align-self": "center"
              }
            }, [_0x57727a._v("Background Color:")]),
            _0x57727a._v(" "),
            _0x2bc734("input", {
              directives: [{
                name: "model",
                rawName: "v-model",
                value: _0x57727a.backgroundColor,
                expression: "backgroundColor"
              }],
              attrs: {
                type: "text"
              },
              domProps: {
                value: _0x57727a.backgroundColor
              },
              on: {
                change: function(_0x560b1c) {
                  return _0x57727a.toggle("backgroundColor");
                },
                input: function(_0x500ba4) {
                  if (!_0x500ba4.target.composing) {
                    _0x57727a.backgroundColor = _0x500ba4.target.value;
                  }
                }
              }
            })
          ])
        ], 1)
      ]),
      _0x57727a._v(" "),
      _0x2bc734("p-check", {
        staticClass: "p-switch",
        on: {
          change: function(_0x173520) {
            return _0x57727a.toggle("autoZoom");
          }
        },
        model: {
          value: _0x57727a.autoZoom,
          callback: function(_0x395367) {
            _0x57727a.autoZoom = _0x395367;
          },
          expression: "autoZoom"
        }
      }, [_0x57727a._v("Auto Zoom")]),
      _0x57727a._v(" "),
      _0x2bc734("p-check", {
        staticClass: "p-switch",
        on: {
          change: function(_0x33268f) {
            return _0x57727a.toggle("skinsEnabled");
          }
        },
        model: {
          value: _0x57727a.skinsEnabled,
          callback: function(_0x3d3414) {
            _0x57727a.skinsEnabled = _0x3d3414;
          },
          expression: "skinsEnabled"
        }
      }, [_0x57727a._v("Skins Enabled")]),
      _0x57727a._v(" "),
      _0x2bc734("p-check", {
        staticClass: "p-switch",
        on: {
          change: function(_0xa8da5b) {
            return _0x57727a.toggle("namesEnabled");
          }
        },
        model: {
          value: _0x57727a.namesEnabled,
          callback: function(_0x38c029) {
            _0x57727a.namesEnabled = _0x38c029;
          },
          expression: "namesEnabled"
        }
      }, [_0x57727a._v("Names Enabled")]),
      _0x57727a._v(" "),
      _0x2bc734("p-check", {
        staticClass: "p-switch",
        on: {
          change: function(_0x2eff80) {
            return _0x57727a.toggle("showMass");
          }
        },
        model: {
          value: _0x57727a.showMass,
          callback: function(_0x3f67c3) {
            _0x57727a.showMass = _0x3f67c3;
          },
          expression: "showMass"
        }
      }, [_0x57727a._v("Mass Visible")]),
      _0x57727a._v(" "),
      _0x2bc734("p-check", {
        staticClass: "p-switch",
        on: {
          change: function(_0x39641c) {
            return _0x57727a.toggle("shortMass");
          }
        },
        model: {
          value: _0x57727a.shortMass,
          callback: function(_0x3c327c) {
            _0x57727a.shortMass = _0x3c327c;
          },
          expression: "shortMass"
        }
      }, [_0x57727a._v("Short Mass")]),
      _0x57727a._v(" "),
      _0x2bc734("p-check", {
        staticClass: "p-switch",
        on: {
          change: function(_0x2c31d9) {
            return _0x57727a.toggle("foodVisible");
          }
        },
        model: {
          value: _0x57727a.foodVisible,
          callback: function(_0x3a8ddb) {
            _0x57727a.foodVisible = _0x3a8ddb;
          },
          expression: "foodVisible"
        }
      }, [_0x57727a._v("Food Visible")]),
      _0x57727a._v(" "),
      _0x2bc734("p-check", {
        staticClass: "p-switch",
        on: {
          change: function(_0x1d947c) {
            return _0x57727a.toggle("eatAnimation");
          }
        },
        model: {
          value: _0x57727a.eatAnimation,
          callback: function(_0x391ecd) {
            _0x57727a.eatAnimation = _0x391ecd;
          },
          expression: "eatAnimation"
        }
      }, [_0x57727a._v("Eat Animation")]),
      _0x57727a._v(" "),
      _0x2bc734("p-check", {
        staticClass: "p-switch",
        on: {
          change: function(_0x1d947c) {
            return _0x57727a.toggle("rememberEjecting");
          }
        },
        model: {
          value: _0x57727a.rememberEjecting,
          callback: function(_0x391ecd) {
            _0x57727a.rememberEjecting = _0x391ecd;
          },
          expression: "rememberEjecting"
        }
      }, [_0x57727a._v("Remember Ejecting")]),
      _0x57727a._v(" "),
      _0x2bc734("div", {
        staticClass: "section"
      }, [
        _0x2bc734("div", {
          staticClass: "header"
        }, [
          _0x2bc734("p-check", {
            staticClass: "p-switch",
            on: {
              change: function(_0x1ac34b) {
                return _0x57727a.toggle("showHud");
              }
            },
            model: {
              value: _0x57727a.showHud,
              callback: function(_0x17a1c9) {
                _0x57727a.showHud = _0x17a1c9;
              },
              expression: "showHud"
            }
          }, [_0x57727a._v("Show HUD")])
        ], 1),
        _0x57727a._v(" "),
        _0x2bc734("div", {
          staticClass: "options",
          class: {
            "disabled-content": !_0x57727a.showHud
          }
        }, [
          _0x2bc734("p-check", {
            staticClass: "p-switch",
            on: {
              change: function(_0x1e8449) {
                return _0x57727a.toggle("showChat");
              }
            },
            model: {
              value: _0x57727a.showChat,
              callback: function(_0x2d8744) {
                _0x57727a.showChat = _0x2d8744;
              },
              expression: "showChat"
            }
          }, [_0x57727a._v("Show Chat")]),
          _0x57727a._v(" "),
          _0x2bc734("p-check", {
            staticClass: "p-switch",
            on: {
              change: function(_0x25d558) {
                return _0x57727a.toggle("minimapEnabled");
              }
            },
            model: {
              value: _0x57727a.minimapEnabled,
              callback: function(_0x2772ad) {
                _0x57727a.minimapEnabled = _0x2772ad;
              },
              expression: "minimapEnabled"
            }
          }, [_0x57727a._v("Show Minimap")]),
          _0x57727a._v(" "),
          _0x2bc734("p-check", {
            staticClass: "p-switch",
            on: {
              change: function(_0x5a6193) {
                return _0x57727a.toggle("minimapLocations");
              }
            },
            model: {
              value: _0x57727a.minimapLocations,
              callback: function(_0x41eb3c) {
                _0x57727a.minimapLocations = _0x41eb3c;
              },
              expression: "minimapLocations"
            }
          }, [_0x57727a._v("Show Minimap Locations")])
        ], 1)
      ]),
      _0x57727a._v(" "),
      _0x2bc734("div", [
          _0x57727a._v(
    "\n        Draw Delay: " +
      _0x57727a._s(
         _0x57727a.drawDelay
      ) +
      "\n        "
  ),
        _0x2bc734("input", {
          staticClass: "slider draw-delay",
          attrs: {
            type: "range",
            min: "5",
            max: "300",
            step: "5"
          },
          domProps: {
            value: _0x57727a.drawDelay
          },
          on: {
            input: function(_0x3ceffb) {
              return _0x57727a.drawDelayChange(_0x3ceffb);
            }
          }
        })
      ]),
      _0x57727a._v(" "),
      _0x2bc734("div", [
        _0x57727a._v("\n        Camera Movement Speed: " + _0x57727a._s(_0x57727a.cameraSpeed) + "\n        "),
        _0x2bc734("input", {
          staticClass: "slider",
          attrs: {
            type: "range",
            min: "0.1",
            max: "1",
            step: "0.01"
          },
          domProps: {
            value: _0x57727a.cameraSpeed
          },
          on: {
            input: function(_0x5cb8c5) {
              return _0x57727a.cameraSpeedChange(_0x5cb8c5);
            }
          }
        })
      ]),
      _0x57727a._v(" "),
      _0x2bc734("div", [
        _0x57727a._v("\n        Camera Zooming Speed: " + _0x57727a._s(_0x57727a.cameraZoomSpeed) + "\r\n        "),
        _0x2bc734("input", {
          staticClass: "slider",
          attrs: {
            type: "range",
            min: "1",
            max: "20",
            step: "1"
          },
          domProps: {
            value: _0x57727a.cameraZoomSpeed
          },
          on: {
            input: function(_0x27325b) {
              return _0x57727a.cameraZoomSpeedChange(_0x27325b);
            }
          }
        })
      ]),
      _0x57727a._v(" "),
      _0x2bc734("div", {
        staticStyle: {
          margin: "0"
        }
      }, [
        _0x57727a._v("\n        Version Hash: " + _0x57727a._s(_0x57727a.clientHash) + "\n    ")
      ])
    ], 1);
  }
  _0x303986._withStripped = true;
  var _0x2fb0e5 = _0x2afb1(1);
  var _0x1309af = _0x2afb1(6);
  var _0x1084da = _0x2afb1(7);
  var _0x1b05c0 = _0x2afb1(182);
  var _0x49df54 = ["doubleResolution", "useWebGL"];
  var _0x196b5f = PIXI.utils.isWebGLSupported();
  var _0x238780 = _0x196b5f && _0x1309af.useWebGL;
  var _0xa134f3 = {
    data: () => ({
      clientHash: "3e2e",
      isWebGLSupported: _0x196b5f,
      showHud: _0x1309af.showHud,
      showChat: _0x1309af.showChat,
      drawDelay: _0x1309af.drawDelay,
      skinsEnabled: _0x1309af.skinsEnabled,
      namesEnabled: _0x1309af.namesEnabled,
      showMass: _0x1309af.showMass,
      shortMass: _0x1309af.shortMass,
      foodVisible: _0x1309af.foodVisible,
      spawnTransparency: _0x1309af.spawnTransparency,
      useWebGL: _0x238780,
      eatAnimation: _0x1309af.eatAnimation,
      rememberEjecting: _0x1309af.rememberEjecting,
      showLocations: _0x1309af.showLocations,
      cameraSpeed: _0x1309af.cameraMoveSmoothing,
      cameraZoomSpeed: _0x1309af.cameraZoomSpeed,
      doubleResolution: _0x1309af.doubleResolution,
      showBackgroundImage: _0x1309af.showBackgroundImage,
      backgroundColor: _0x1309af.backgroundColor,
      backgroundImageUrl: _0x1309af.backgroundImageUrl,
      backgroundImageRepeat: _0x1309af.backgroundImageRepeat,
      backgroundImageOpacity: _0x1309af.backgroundImageOpacity,
      backgroundDefaultIfUnequal: _0x1309af.backgroundDefaultIfUnequal,
      minimapEnabled: _0x1309af.minimapEnabled,
      minimapLocations: _0x1309af.minimapLocations,
      autoZoom: _0x1309af.autoZoom
    }),
    methods: {
      toggle: function (_0x264cb8) {
        var _0x390528 = this[_0x264cb8];
        if (_0x1309af.set(_0x264cb8, _0x390528)) {
          if (_0x49df54.includes(_0x264cb8)) {
            _0x1084da.confirm("Refresh page to activate changes?", () => {
              // TOLOOK
              setTimeout(() => {
                location.reload();
              }, 500);
            });
          } else if (_0x264cb8 === "rememberEjecting") {
            // _0x1f0830 is _0x2afb1(1), assumed to be the network module
            // (ensure _0x1f0830 is defined in this scope or accessible, e.g. imported at the top of the component section)
            if (typeof _0x2fb0e5 !== 'undefined' && _0x2fb0e5 && typeof _0x2fb0e5.sendBuffer === 'function') {
              const buffer = new ArrayBuffer(2);
              const view = new DataView(buffer);
              view.setUint8(0, 26); // Opcode for SetRememberEjecting
              view.setUint8(1, _0x390528 ? 1 : 0); // _0x390528 is the new boolean value
              _0x2fb0e5.sendBuffer(buffer);
            } else if (typeof _0x2fb0e5 !== 'undefined' && _0x2fb0e5 && _0x2fb0e5.ws && _0x2fb0e5.ws.readyState === WebSocket.OPEN) {
              // Fallback if ws is directly accessible and sendBuffer is not defined
              const buffer = new ArrayBuffer(2);
              const view = new DataView(buffer);
              view.setUint8(0, 26); // Opcode for SetRememberEjecting
              view.setUint8(1, _0x390528 ? 1 : 0);
              _0x2fb0e5.ws.send(buffer);
            } else {
              console.warn("Network send function/WebSocket not available for rememberEjecting preference. (_0x2fb0e5 missing or not ready)");
            }
            // No specific UI refresh needed here beyond the toggle itself,
            // so it doesn't need to fall into the other UI update cases below unless intended.
          } else if (_0x264cb8 !== "backgroundColor") {
            if (_0x264cb8 !== "minimapLocations") {
              if (_0x264cb8 !== "showHud") {
                if (_0x2fb0e5.running) {
                  switch (_0x264cb8) {
                    case "skinsEnabled":
                      _0x2fb0e5.playerManager.onSkinsChanged(_0x390528);
                      break;
                    case "foodVisible":
                      _0x2fb0e5.scene.food.visible = _0x390528;
                      break;
                    case "showBackgroundImage":
                      _0x2fb0e5.scene.toggleBackgroundImage(_0x390528);
                      break;
                    case "backgroundImageUrl":
                    case "backgroundImageRepeat":
                    case "backgroundDefaultIfUnequal":
                      _0x2fb0e5.scene.setBackgroundImage();
                      break;
                    case "minimapEnabled":
                      if (_0x390528) {
                        _0x2fb0e5.events.$emit("minimap-show");
                      } else {
                        _0x2fb0e5.events.$emit("minimap-hide");
                      }
                      break;
                    case "showChat":
                      _0x2fb0e5.events.$emit("chat-visible", _0x390528);
                  }
                }
              } else {
                window.app.showHud = _0x390528;
              }
            } else {
              _0x2fb0e5.events.$emit("minimap-show-locations", _0x390528);
            }
          } else {
            var _0x4a5d6a = PIXI.utils.string2hex(_0x390528);
            _0x2fb0e5.renderer.backgroundColor = _0x4a5d6a;
          }
        }
      },
      drawDelayChange: function (_0x5ba4da) {
        this.drawDelay = _0x5ba4da.target.valueAsNumber;
        _0x1309af.set("drawDelay", this.drawDelay);
      },
      cameraSpeedChange: function (_0x4f609a) {
        this.cameraSpeed = _0x4f609a.target.valueAsNumber;
        _0x1309af.set("cameraMoveSmoothing", this.cameraSpeed);
      },
      cameraZoomSpeedChange: function (_0x45a112) {
        this.cameraZoomSpeed = _0x45a112.target.valueAsNumber;
        _0x1309af.set("cameraZoomSpeed", this.cameraZoomSpeed);
      },
      backgroundOpacityChange: function (_0x449753) {
        this.backgroundImageOpacity = _0x449753.target.valueAsNumber;
        _0x1309af.set("backgroundImageOpacity", this.backgroundImageOpacity);
        if (_0x2fb0e5.scene && _0x2fb0e5.scene.backgroundSprite) {
          _0x2fb0e5.scene.backgroundSprite.alpha = this.backgroundImageOpacity;
        }
      }
    },
    created: function () {
      if (_0x2fb0e5.running && _0x2fb0e5.border.width !== _0x2fb0e5.border.height && !_0x1b05c0.isSeen("backgroundDefaultIfUnequal")) {
        _0x1084da.instance.fire({
          html: "Custom backgrounds might look stretched on this gamemode.<br>To enable them, turn off setting <i>Use Default on Unequal Maps.</i>",
          confirmButtonText: "OK"
        });
        _0x1b05c0.setSeen("backgroundDefaultIfUnequal");
      }
    }
  };
  _0x2afb1(183);
  var _0x5f325d = Object(_0x4db777.a)(_0xa134f3, _0x303986, [], false, null, null, null);
  _0x5f325d.options.__file = "src/components/settings.vue";
  var _0x38c8ad = _0x5f325d.exports;
  function _0x2a59fa() {
    var _0x39b1ac = this;
    var _0xd4efd8 = _0x39b1ac.$createElement;
    var _0x2fd9d8 = _0x39b1ac._self._c || _0xd4efd8;
    return _0x2fd9d8("div", {
      attrs: {
        id: "hotkey-container"
      }
    }, [_0x2fd9d8("div", {
      staticClass: "hotkeys"
    }, _0x39b1ac._l(_0x39b1ac.availableHotkeys, function (_0x545ef0, _0x471ecf) {
      return _0x2fd9d8("div", {
        key: _0x471ecf,
        staticClass: "row"
      }, [_0x2fd9d8("span", {
        staticClass: "action"
      }, [_0x39b1ac._v(_0x39b1ac._s(_0x471ecf))]), _0x39b1ac._v(" "), _0x2fd9d8("span", {
        staticClass: "bind",
        attrs: {
          tabindex: "0"
        },
        on: {
          mousedown: function (_0x22d2c9) {
            return _0x39b1ac.onMouseDown(_0x22d2c9, _0x545ef0);
          },
          keydown: function (_0x4d688d) {
            _0x4d688d.preventDefault();
            return _0x39b1ac.onKeyDown(_0x4d688d, _0x545ef0);
          }
        }
      }, [_0x39b1ac._v("\n                " + _0x39b1ac._s(_0x39b1ac.hotkeys[_0x545ef0]) + "\r\n            ")])]);
    }), 0), _0x39b1ac._v(" "), _0x2fd9d8("div", {
      staticClass: "footer"
    }, [_0x2fd9d8("span", {
      staticClass: "reset-button2",
      on: {
        click: _0x39b1ac.onResetClick
      }
    }, [_0x2fd9d8("i", {
      staticClass: "fa fa-undo"
    }), _0x39b1ac._v(" Reset\n        ")])])]);
  }
  _0x2a59fa._withStripped = true;
  var _0x19a8ff = _0x2afb1(59);
  var _0x325133 = _0x2afb1(7);
  var _0x596612 = {
    data() {
      _0x237eaa = {
        Feed: "feed",
        "Feed Macro": "feedMacro",
        Split: "split",
        "Double Split": "splitx2",
        "Triple Split": "splitx3",
        "Quad Split": "splitMax",
        "Split 32": "split32",
        "Split 64": "split64",
        "Split 128": "split128",
        "Split 256": "split256",
        "Diagonal Linesplit": "linesplit",
        "Lock Linesplit": "lockLinesplit",
        "Stop Movement": "stopMovement",
        Respawn: "respawn",
        "Multibox Switch": "switchMultibox",
        "Join Dual": "requestCreateDual",
        "Toggle Skins": "toggleSkins",
        "Toggle Names": "toggleNames",
        "Toggle Food": "toggleFood",
        "Toggle Mass": "toggleMass",
        "Spectate Lock": "spectateLock",
        "Save Replay": "saveReplay",
        "Toggle HUD": "toggleHud",
        "Toggle Chat": "toggleChat",
        "Zoom Level 1": "zoomLevel1",
        "Zoom Level 2": "zoomLevel2",
        "Zoom Level 3": "zoomLevel3",
        "Zoom Level 4": "zoomLevel4",
        "Zoom Level 5": "zoomLevel5"
      };
      //if (localStorage.adminMode) {
        _0x237eaa["Select Player"] = "selectPlayer";
      //}
      return {
        availableHotkeys: _0x237eaa,
        hotkeys: _0x19a8ff.get()
      };
      var _0x237eaa;
    },
    methods: {
      onResetClick: function () {
        _0x325133.confirm("Are you sure you want to reset all binds?", () => {
          this.hotkeys = _0x19a8ff.reset();
        });
      },
      onMouseDown: function (_0x479854, _0x88a1fe) {
        if (_0x479854.target === document.activeElement) {
          var _0x29aae9 = "MOUSE" + _0x479854.button;
          if (_0x19a8ff.set(_0x88a1fe, _0x29aae9)) {
            _0x479854.preventDefault();
            _0x479854.target.blur();
          }
        }
      },
      onKeyDown: function (_0x2d7072, _0x9e73da) {
        var _0x376fcd = _0x19a8ff.convertKey(_0x2d7072.key);
        if (_0x376fcd !== "ESCAPE" && _0x376fcd !== "ENTER") {
          if (_0x19a8ff.set(_0x9e73da, _0x376fcd)) {
            _0x2d7072.target.blur();
          }
        } else {
          _0x2d7072.target.blur();
        }
      }
    },
    filters: {
      hotkeyText: function (_0x24361e) {
        var _0x445e5f = {
          32: "SPACE",
          MOUSE0: "MOUSE0"
        }[_0x24361e];
        return _0x445e5f || String.fromCharCode(_0x24361e);
      }
    }
  };
  _0x2afb1(185);
  var _0x4c80a5 = Object(_0x4db777.a)(_0x596612, _0x2a59fa, [], false, null, null, null);
  _0x4c80a5.options.__file = "src/components/hotkeys.vue";
  var _0x1dfdef = _0x4c80a5.exports;
  function _0x539cce() {
    var _0x3555d7 = this;
    var _0x48d180 = _0x3555d7.$createElement;
    var _0x4bb1e3 = _0x3555d7._self._c || _0x48d180;
    return _0x4bb1e3("div", {
      staticClass: "container"
    }, [_0x4bb1e3("input", {
      ref: "file",
      staticStyle: {
        display: "none"
      },
      attrs: {
        type: "file",
        accept: ".vanis",
        multiple: ""
      },
      on: {
        change: function (_0x3bdf37) {
          return _0x3555d7.onFile(_0x3bdf37);
        }
      }
    }), _0x3555d7._v(" "), _0x4bb1e3("div", {
      staticClass: "replay-button-row"
    }, [_0x4bb1e3("input", {
      staticClass: "vanis-button",
      attrs: {
        type: "button",
        value: "Import Replay"
      },
      on: {
        click: function (_0x3bf374) {
          return _0x3555d7.$refs.file.click();
        }
      }
    }), _0x3555d7._v(" "), _0x4bb1e3("input", {
      staticClass: "vanis-button",
      staticStyle: {
        width: "134px"
      },
      attrs: {
        type: "button",
        disabled: _0x3555d7.downloading || !_0x3555d7.replays.length,
        value: _0x3555d7.downloading ? "Packing Zip File ..." : "Download Replays"
      },
      on: {
        click: function (_0x465a29) {
          return _0x3555d7.downloadAllReplays();
        }
      }
    }), _0x3555d7._v(" "), _0x4bb1e3("input", {
      staticClass: "vanis-button",
      attrs: {
        type: "button",
        value: "Delete All Replays",
        disabled: _0x3555d7.downloading || !_0x3555d7.replays.length
      },
      on: {
        click: function (_0xf15611) {
          return _0x3555d7.deleteAllReplays();
        }
      }
    })]), _0x3555d7._v(" "), _0x4bb1e3("div", {
      staticClass: "replays-container"
    }, [_0x4bb1e3("div", {
      staticClass: "replays"
    }, [!_0x3555d7.replays.length && _0x3555d7.loaded ? _0x4bb1e3("div", {
      staticClass: "notification"
    }, [_0x4bb1e3("div", [_0x3555d7._v("Press " + _0x3555d7._s(_0x3555d7.hotkey) + " in game to save last 10 seconds of gameplay.")]), _0x3555d7._v(" "), _0x4bb1e3("div", {
      staticStyle: {
        color: "red",
        "font-weight": "bold"
      }
    }, [_0x3555d7._v("Replays are saved in browser memory!")])]) : _0x3555d7._e(), _0x3555d7._v(" "), _0x3555d7._l(_0x3555d7.replays, function (_0x2a9b51, _0x8e1784) {
      return _0x4bb1e3("replay-item", {
        key: _0x8e1784,
        attrs: {
          replay: _0x2a9b51
        }
      });
    })], 2)])]);
  }
  _0x539cce._withStripped = true;
  var _0x18bc9e = _0x2afb1(114);
  var _0x409377 = _0x2afb1(85);
  var _0x5c8913 = _0x2afb1(187);
  var _0x3f1d69 = _0x2afb1(1);
  var _0x4cf032 = _0x2afb1(59);
  var _0x20da04 = _0x2afb1(7);
  var _0x200884 = _0x2afb1(15);
  var _0x52921f = _0x3f1d69.replay.database;
  var _0x2e8b96 = {
    data: () => ({
      loaded: false,
      replays: [],
      downloading: false,
      hotkey: _0x4cf032.get().saveReplay
    }),
    components: {
      replayItem: _0x18bc9e.default
    },
    methods: {
      downloadAllReplays() {
        this.downloading = true;
        var _0x58ba02 = new _0x5c8913();
        _0x52921f.iterate((_0x15804b, _0x13afee) => {
          _0x58ba02.file(_0x13afee + ".vanis", _0x15804b);
        }, () => {
          _0x58ba02.generateAsync({
            type: "blob"
          }).then(_0x3f398d => {
            var _0x58192e = "replays_" + _0x200884.getTimestamp() + ".zip";
            _0x409377.saveAs(_0x3f398d, _0x58192e);
            this.downloading = false;
          });
        });
      },
      deleteAllReplays() {
        _0x20da04.confirm("Are you sure that you want to delete all replays?", async () => {
          try {
            await _0x52921f.clear();
          } catch (_0x38c085) {
            _0x20da04.alert("Error clearing replays: " + _0x38c085.message);
            return;
          }
          this.getReplays();
        });
      },
      getReplays() {
        var _0x547136 = [];
        _0x52921f.iterate((_0x51ca49, _0x3749b2) => {
          var _0x51a346 = {
            name: _0x3749b2,
            data: _0x51ca49
          };
          if (_0x51ca49.startsWith("REPLAY")) {
            _0x51a346.image = _0x51ca49.split("|")[2];
          } else {
            _0x51a346.image = "https://vanis.io/img/replay-placeholder.png";
          }
          _0x547136.push(_0x51a346);
        }, () => {
          this.replays = _0x547136.reverse();
          this.loaded = true;
        });
      },
      async onFile(_0x3fc328) {
        var _0x56f2ba = Array.from(_0x3fc328.target.files);
        if (_0x56f2ba.length) {
          if (_0x3fc328.target) {
            _0x3fc328.target.value = null;
          }
          var _0x15f5ef = _0x56f2ba.map(async _0x435cd1 => {
            var _0x2dac4a = _0x435cd1.name.replace(/\.vanis$/, "");
            var _0x24d905 = await function (_0x3f4979) {
              return new Promise((_0x5d427a, _0x457235) => {
                var _0x534a16 = new FileReader();
                _0x534a16.onload = _0x30bbcb => _0x5d427a(_0x30bbcb.target.result);
                _0x534a16.onerror = _0x457235;
                _0x534a16.readAsText(_0x3f4979);
              });
            }(_0x435cd1);
            return _0x52921f.setItem(_0x2dac4a, _0x24d905);
          });
          try {
            await Promise.all(_0x15f5ef);
          } catch (_0x528f39) {
            _0x20da04.alert("Error importing replays: \"" + _0x528f39.message + "\"");
          }
          this.getReplays();
        }
      }
    },
    created() {
      _0x3f1d69.events.$on("replay-added", this.getReplays);
      _0x3f1d69.events.$on("replay-removed", this.getReplays);
      this.getReplays();
    },
    beforeDestroy() {
      _0x3f1d69.events.$off("replay-added", this.getReplays);
      _0x3f1d69.events.$off("replay-removed", this.getReplays);
    }
  };
  _0x2afb1(227);
  var _0x44a4c8 = Object(_0x4db777.a)(_0x2e8b96, _0x539cce, [], false, null, "4a996e52", null);
  _0x44a4c8.options.__file = "src/components/replays3.vue";
  var _0x5a46b6 = _0x44a4c8.exports;
  _0x2afb1(19);
  var _0x1108e8 = _0x2afb1(1);
  var _0x1744e7 = _0x2afb1(7);
  var _0x3980ec = {
    components: {
      modal: _0xcd66ac.default,
      settings: _0x38c8ad,
      hotkeys: _0x1dfdef,
      replays3: _0x5a46b6
    },
    data: () => ({
      activeModal: "",
      showSettings: false,
      showHotkeys: false,
      gameState: _0x1108e8.state,
      nickname: typeof localStorage.nickname == "string" ? localStorage.nickname : "",
      teamtag: localStorage.teamtag || "",
      skinUrl: typeof localStorage.skinUrl == "string" ? localStorage.skinUrl : "https://skins.vanis.fun/s/vanis1"
    }),
    created: function () {
      this.getUserData();
      _0x1108e8.events.$on("skinClick", _0x210046 => {
        this.skinUrl = _0x210046;
      });
    },
    methods: {
      openModal: function (_0x182b04) {
        this.activeModal = _0x182b04;
        this.$emit("modal-open", true);
      },
      closeModal: function () {
        this.activeModal = "";
        this.$emit("modal-open", false);
      },
      login: function () {},
      getUserData: function () {},
      play: function (_0x1259a9) {
        if (!this.gameState.isAlive) {
          _0x1108e8.joinGame();
        }
        _0x1108e8.showMenu(false);
      },
      spectate: function () {
        if (this.gameState.isAlive) {
          console.warn("Cannot spectate, player is still alive");
        } else {
          _0x1108e8.actions.spectate();
          _0x1108e8.showMenu(false);
        }
      },
      skinLoaded: function () {
        var _0x3d17a8 = this.$refs.skin;
        if (_0x3d17a8 && (_0x3d17a8.naturalWidth > 2048 || _0x3d17a8.naturalHeight > 2048)) {
          _0x1744e7.instance.fire({
            html: "Your skin images size is too large.<br>Preferred skin size is 512x512px<br>Size is limited to 2048x2048px.",
            confirmButtonText: "OK"
          });
        }
      },
      onSkinUrlChange() {
        if (this.skinUrl.length > 80) {
          this.skinUrl = "";
          _0x1744e7.alert("Skin url too long.");
          return;
        }
        _0x1108e8.events.$emit("skinUrlChanged", this.skinUrl);
      },
      onTeamTagChange() {
        localStorage.setItem("teamtag", this.teamtag);
      },
      onNicknameChange() {
        localStorage.setItem("nickname", this.nickname);
      }
    }
  };
  _0x2afb1(229);
  var _0x4710d8 = Object(_0x4db777.a)(_0x3980ec, _0x7427c3, [function () {
    var _0x23d133 = this.$createElement;
    var _0x3a399f = this._self._c || _0x23d133;
    return _0x3a399f("div", {
      staticStyle: {
        "text-align": "center",
        height: "30px"
      }
    }, [_0x3a399f("div", {
      staticStyle: {
        padding: "4px"
      }
    }, [this._v("I love you!- new gamemode-- diagss!")]), this._v(" "), _0x3a399f("div", {
      attrs: {
        id: "vanis-io_300x250"
      }
    })]);
  }], false, null, "1bcde71e", null);
  _0x4710d8.options.__file = "src/components/player.vue";
  var _0xab9c29 = _0x4710d8.exports;
  function _0x2d793c() {}
  _0x2d793c._withStripped = true;
  function _0x174b7c() {}
  _0x174b7c._withStripped = true;
  var _0x3fe23b = {
    props: ["progress"]
  };
  _0x2afb1(231);
  var _0x22e377 = Object(_0x4db777.a)(_0x3fe23b, _0x174b7c, [], false, null, "4e838c74", null);
  _0x22e377.options.__file = "src/components/progressBar.vue";
  var _0x46d69d = _0x22e377.exports;
  var _0x1df529 = _0x2afb1(233);
  _0x2afb1(19);
  var _0x320df6 = _0x2afb1(7);
  var _0xf15817 = _0x2afb1(1);
  var _0x49a637 = _0x2afb1(234);
  var _0x1ee319 = {
    components: {
      progressBar: _0x46d69d
    },
    data: () => ({
      account: null,
      progress: 0,
      xpAtCurrentLevel: 0,
      xpAtNextLevel: 0,
      loading: false
    }),
    created: function () {
      _0xf15817.events.$on("xp-update", this.onXpUpdate);
      if (_0x1df529.vanisToken) {
        this.loadUserData();
      }
      this.listenForToken();
    },
    beforeDestroy() {
      _0xf15817.events.$off("xp-update", this.onXpUpdate);
    },
    methods: {
      listenForToken() {
        window.addEventListener("message", _0x552b50 => {
          var _0x207d5b = _0x552b50.data.vanis_token;
          if (_0x207d5b) {
            this.onLoggedIn(_0x207d5b);
            _0x552b50.source.postMessage("loggedIn", _0x552b50.origin);
          }
        });
      },
      async loadUserData() {
        this.loading = true;
        try {
          var _0x4e823b = await _0x1df529.get("/me");
        } catch (_0x4cb575) {
          this.loading = false;
          var _0x2da99 = _0x4cb575.response;
          if (_0x2da99) {
            console.error("Account:", _0x2da99.data);
            if (_0x2da99.status === 401) {
              _0x1df529.clearToken();
            }
          }
          return;
        }
        this.setAccountData(_0x4e823b);
        this.updateProgress(this.account.xp, this.account.level);
        this.loading = false;
      },
      async logout() {
        try {
          await _0x1df529.get("/me/logout");
        } catch (_0x4f017b) {
          var _0x42ff0e = _0x4f017b.response;
          if (_0x42ff0e && _0x42ff0e.status !== 401) {
            _0x320df6.alert("Error: " + _0x4f017b.message);
          }
        }
        _0x1df529.clearToken();
        this.account = null;
      },
      getAvatarUrl: (_0x386b61, _0x50042d) => _0x50042d ? "https://cdn.discordapp.com/avatars/" + _0x386b61 + "/" + _0x50042d + ".png" : "https://cdn.discordapp.com/embed/avatars/0.png",
      setAccountData(_0x379ba9) {
        _0x379ba9.avatarUrl = this.getAvatarUrl(_0x379ba9.discordId, _0x379ba9.discordAvatar);
        this.account = _0x379ba9;
      },
      onXpUpdate: function (_0x4668f8) {
        if (this.account) {
          var _0x29a5ab = _0x49a637.getLevel(_0x4668f8);
          this.account.xp = _0x4668f8;
          this.account.level = _0x29a5ab;
          this.updateProgress(_0x4668f8, _0x29a5ab);
        }
      },
      updateProgress(_0x3dba69, _0x1ea117) {
        this.xpAtCurrentLevel = _0x49a637.getXp(_0x1ea117);
        this.xpAtNextLevel = _0x49a637.getXp(_0x1ea117 + 1);
        this.progress = (_0x3dba69 - this.xpAtCurrentLevel) / (this.xpAtNextLevel - this.xpAtCurrentLevel);
      },
      openDiscordLogin: function () {},
      onLoggedIn(_0x163947) {
        console.assert(_0x163947, "Vanis token empty or undefined");
        _0x1df529.setToken(_0x163947);
        this.loadUserData();
      }
    }
  };
  _0x2afb1(235);
  var _0x2a6315 = Object(_0x4db777.a)(_0x1ee319, _0x2d793c, [], false, null, "661435cd", null);
  _0x2a6315.options.__file = "src/components/account.vue";
  var _0x315e63 = _0x2a6315.exports;
  function _0x46c47b() {
    var _0x3c590a = this;
    var _0x5191e7 = _0x3c590a.$createElement;
    var _0x4609cf = _0x3c590a._self._c || _0x5191e7;
    return _0x4609cf("div", {
      staticStyle: {
        padding: "16px"
      },
      attrs: {
        id: "skins"
      }
    }, _0x3c590a._l(_0x3c590a.skins, function (_0x24949c, _0x36343f) {
      return _0x4609cf("img", {
        key: _0x36343f,
        staticClass: "skin",
        class: {
          selected: _0x3c590a.selectedSkinIndex === _0x36343f
        },
        attrs: {
          src: _0x24949c,
          alt: ""
        },
        on: {
          click: function (_0x515654) {
            return _0x3c590a.selectSkin(_0x36343f);
          }
        }
      });
    }), 0);
  }
  _0x46c47b._withStripped = true;
  var _0x5377aa = _0x2afb1(1);
  var _0x1f2f35 = {
    data: () => ({
      selectedSkinIndex: 0,
      skins: []
    }),
    created: function () {
      _0x5377aa.events.$on("skinUrlChanged", this.onSkinUrlChanged.bind(this));
      this.skins = this.loadSkins() || this.getDefaultSkins();
      var _0x170759 = Number(localStorage.selectedSkinIndex) || 0;
      this.selectSkin(_0x170759);
    },
    methods: {
      loadSkins() {
        var _0x4a7342 = localStorage.skins;
        if (!_0x4a7342) {
          return false;
        }
        try {
          var _0x585c8a = JSON.parse(_0x4a7342);
        } catch (_0x4683b2) {
          console.error("Error parsing saved skins", _0x4683b2.message);
          return false;
        }
        if (Array.isArray(_0x585c8a)) {
          return _0x585c8a;
        } else {
          console.error("localstorage.skins is not an array!");
          return false;
        }
      },
      getDefaultSkins() {
        var _0xabf7eb = [];
        for (var _0x192d06 = 0; _0x192d06 < 6; _0x192d06++) {
          _0xabf7eb.push("https://skins.vanis.fun/s/vanis1");
        }
        return _0xabf7eb;
      },
      onSkinUrlChanged(_0x49b8b2) {
        this.$set(this.skins, this.selectedSkinIndex, _0x49b8b2);
        this.saveSkins();
      },
      selectSkin(_0x4499f0) {
        this.selectedSkinIndex = _0x4499f0;
        localStorage.selectedSkinIndex = _0x4499f0;
        var _0x5dbb45 = this.skins[_0x4499f0];
        _0x5377aa.events.$emit("skinClick", _0x5dbb45);
      },
      saveSkins() {
        localStorage.skins = JSON.stringify(this.skins);
      }
    }
  };
  _0x2afb1(237);
  var _0x41c07c = Object(_0x4db777.a)(_0x1f2f35, _0x46c47b, [], false, null, "1c614894", null);
  _0x41c07c.options.__file = "src/components/skins.vue";
  var _0x4975b7 = _0x41c07c.exports;
  var _0x29d1cd = _0x2afb1(1);
  var _0x532977 = {
    data: () => ({
      isModalOpen: false,
      selectedTab: "servers",
      gameState: _0x29d1cd.state
    }),
    methods: {
      onModalChange: function (_0x208663) {
        this.isModalOpen = _0x208663;
      }
    },
    components: {
      servers: _0x3fa86f,
      playerContainer: _0xab9c29,
      account: _0x315e63,
      skins: _0x4975b7
    }
  };
  _0x2afb1(239);
  var _0x5acc54 = Object(_0x4db777.a)(_0x532977, _0x2500ed, [], false, null, "ebed1606", null);
  _0x5acc54.options.__file = "src/components/main-container.vue";
  var _0x42bc8a = _0x5acc54.exports;
  function _0xec8cac() {
    this._self._c;
    return this._m(0);
  }
  _0xec8cac._withStripped = true;
  _0x2afb1(241);
  var _0xbb469e = Object(_0x4db777.a)({}, _0xec8cac, [function () {
    var _0x4a22ac = this.$createElement;
    var _0x39467c = this._self._c || _0x4a22ac;
    return _0x39467c("div", {
      staticClass: "social-container"
    }, [_0x39467c("a", {
      staticClass: "discord-link",
      attrs: {
        href: "https://discord.gg/nRBaqFVczR",
        target: "_blank"
      }
    }, [_0x39467c("i", {
      staticClass: "fab fa-discord"
    }), this._v(" Official Discord\n    ")]), this._v(" "), _0x39467c("a", {
      staticClass: "tournaments-link",
      attrs: {
        href: "https://discord.gg/nRBaqFVczR",
        target: "_blank"
      }
    }, [_0x39467c("i", {
      staticClass: "fas fa-trophy"
    }), this._v(" Tournaments\n    ")]), this._v(" "), _0x39467c("a", {
      staticClass: "youtube-link",
      attrs: {
        href: "https://discord.gg/nRBaqFVczR",
        target: "_blank"
      }
    }, [_0x39467c("i", {
      staticClass: "fab fa-youtube"
    }), this._v(" YouTube\n    ")]), this._v(" "), _0x39467c("a", {
      attrs: {
        href: "https://discord.gg/nRBaqFVczR",
        target: "_blank",
        id: "skins-link"
      }
    }, [_0x39467c("i", {
      staticClass: "fas fa-images"
    }), this._v(" Skins\n    ")])]);
  }], false, null, "4d0670e9", null);
  _0xbb469e.options.__file = "src/components/social-links.vue";
  var _0x42f578 = _0xbb469e.exports;
  function _0x3c52df() {
    this._self._c;
    return this._m(0);
  }
  _0x3c52df._withStripped = true;
  var _0x59be2 = {
    data() {}
  };
  _0x2afb1(243);
  var _0x4c6edf = Object(_0x4db777.a)(_0x59be2, _0x3c52df, [function () {}], false, null, "6843da33", null);
  _0x4c6edf.options.__file = "src/components/privacy-tos.vue";
  var _0x2f45d0 = _0x4c6edf.exports;
  function _0x5d1c8c() {
    var _0x1f3afa = this;
    var _0x57529a = _0x1f3afa.$createElement;
    var _0x23f1db = _0x1f3afa._self._c || _0x57529a;
    if (_0x1f3afa.show) {
      return _0x23f1db("div", {
        staticClass: "context-menu fade",
        style: {
          top: _0x1f3afa.y + "px",
          left: _0x1f3afa.x + "px"
        }
      }, [_0x23f1db("div", {
        staticClass: "player-name"
      }, [_0x1f3afa._v(_0x1f3afa._s(_0x1f3afa.playerName))]), _0x1f3afa._v(" "), _0x23f1db("div", [_0x1f3afa._v("Block")]), _0x1f3afa._v(" "), _0x23f1db("div", {
        on: {
          click: _0x1f3afa.hideName
        }
      }, [_0x1f3afa._v("Hide Name")]), _0x1f3afa._v(" "), _0x23f1db("div", {
        on: {
          click: _0x1f3afa.hideSkin
        }
      }, [_0x1f3afa._v("Hide Skin")]), _0x1f3afa._v(" "), _0x23f1db("div", [_0x1f3afa._v("Kick")]), _0x1f3afa._v(" "), _0x23f1db("div", [_0x1f3afa._v("Ban")]), _0x1f3afa._v(" "), _0x23f1db("div", [_0x1f3afa._v("Mute")])]);
    } else {
      return _0x1f3afa._e();
    }
  }
  _0x5d1c8c._withStripped = true;
  _0x2afb1(1);
  var _0x1c627c = {
    data: () => ({
      show: false,
      playerName: "",
      x: 100,
      y: 55
    }),
    methods: {
      open: function (_0x5f4c30, _0x29f2b7) {
        this.player = _0x29f2b7;
        this.playerName = _0x29f2b7.name;
        this.x = _0x5f4c30.clientX;
        this.y = _0x5f4c30.clientY;
        this.show = true;
        document.addEventListener("click", _0x2425e7 => {
          this.show = false;
        }, {
          once: true
        });
      },
      hideName: function () {
        this.player.setName("");
        this.player.render();
      },
      hideSkin: function () {
        this.player.setSkin("");
        this.player.render();
      }
    },
    created() {}
  };
  _0x2afb1(245);
  var _0x36be87 = Object(_0x4db777.a)(_0x1c627c, _0x5d1c8c, [], false, null, "4dbee04d", null);
  _0x36be87.options.__file = "src/components/context-menu.vue";
  var _0x3f1c64 = _0x36be87.exports;
  function _0x12be22() {
    var _0x3bdc1d = this.$createElement;
    var _0x19621f = this._self._c || _0x3bdc1d;
    return _0x19621f("div", {
      attrs: {
        id: "hud"
      }
    }, [_0x19621f("stats"), this._v(" "), _0x19621f("chatbox"), this._v(" "), _0x19621f("leaderboard"), this._v(" "), _0x19621f("minimap")], 1);
  }
  _0x12be22._withStripped = true;
function _0x564c2d() {
  var _0x3602f3 = this;
  var _0x2bee3b = _0x3602f3.$createElement;
  var _0x5108ef = _0x3602f3._self._c || _0x2bee3b;
  var timing = window.timing || [];

  return _0x5108ef("div", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _0x3602f3.visible,
      expression: "visible"
    }],
    staticClass: "stats"
  }, [
    _0x5108ef("div", [_0x3602f3._v("FPS: " + _0x3602f3._s(_0x3602f3.fps || "-"))]),
    _0x3602f3._v(" "),
    _0x5108ef("div", [_0x3602f3._v("Ping: " + _0x3602f3._s(window.ping || "-"))]),
    _0x3602f3._v(" "),
    _0x5108ef("div", [_0x3602f3._v("Cells: " + _0x3602f3._s(_0x3602f3.cells || "-"))]),
    //_0x3602f3._v(" "),
  //  _0x3602f3._v(" "),
   // _0x5108ef("div", [_0x3602f3._v("Routers: " + _0x3602f3._s((timing[1]?.toFixed(2)) || "-"))]),
   // _0x3602f3._v(" "),
   // _0x5108ef("div", [_0x3602f3._v("CellCount: " + _0x3602f3._s(~~(timing[2] ?? 0) || "-"))]),
   // _0x3602f3._v(" "),
   // _0x5108ef("div", [_0x3602f3._v("Bandwidth: " + _0x3602f3._s((timing[3]?.toFixed(2)) || "?kb/s"))]),
    //_0x3602f3._v(" "),
    //_0x5108ef("div", [_0x3602f3._v("CellTicks: " + _0x3602f3._s((timing[4]?.toFixed(2)) || "-"))]),
    //_0x3602f3._v(" "),
    //_0x5108ef("div", [_0x3602f3._v("CellSpawn: " + _0x3602f3._s((timing[5]?.toFixed(2)) || "-"))]),
    //_0x3602f3._v(" "),
   // _0x5108ef("div", [_0x3602f3._v("Insides: " + _0x3602f3._s(~~(timing[6] ?? 0) || "-"))]),
    //_0x3602f3._v(" "),
   // _0x5108ef("div", [_0x3602f3._v("CellBoost: " + _0x3602f3._s((timing[7]?.toFixed(2)) || "-"))]),
   // _0x3602f3._v(" "),
   // _0x5108ef("div", [_0x3602f3._v("PCUpdate: " + _0x3602f3._s((timing[8]?.toFixed(2)) || "-"))]),
   // _0x3602f3._v(" "),
   // /_0x5108ef("div", [_0x3602f3._v("CellSort: " + _0x3602f3._s((timing[9]?.toFixed(2)) || "-"))]),
    //_0x3602f3._v(" "),
    //_0x5108ef("div", [_0x3602f3._v("QuadTree: " + _0x3602f3._s((timing[10]?.toFixed(2)) || "-"))]),
    //_0x3602f3._v(" "),
    //_0x5108ef("div", [_0x3602f3._v("QueryOps: " + _0x3602f3._s(~~(timing[11] ?? 0) || "-"))]),
    //_0x3602f3._v(" "),
    //_0x5108ef("div", [_0x3602f3._v("RigidCheck: " + _0x3602f3._s((timing[12]?.toFixed(2)) || "-"))]),
   // _0x3602f3._v(" "),
    //_0x5108ef("div", [_0x3602f3._v("EatCheck: " + _0x3602f3._s((timing[13]?.toFixed(2)) || "-"))]),
    //_0x3602f3._v(" "),
    //_0x5108ef("div", [_0x3602f3._v("Viewarea: " + _0x3602f3._s((timing[14]?.toFixed(2)) || "-"))]),
    _0x3602f3._v(" "),
    _0x5108ef("div", {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: _0x3602f3.mass,
        expression: "mass"
      }]
    }, [_0x3602f3._v("Mass: " + _0x3602f3._s(_0x3602f3.mass))])
  ]);
}

  _0x564c2d._withStripped = true;
  var _0x1f59fa = _0x2afb1(1);
  var _0x2f475a = {
    data: () => ({
      visible: false,
      ping: 0,
      fps: 0,
      mass: 0,
      cells: 0
    }),
    created() {
      _0x1f59fa.events.$on("stats-visible", _0x88cd9 => this.visible = _0x88cd9);
      _0x1f59fa.events.$on("stats-changed", _0xcb822e => {
        this.ping = _0xcb822e.ping || 0;
        this.fps = _0xcb822e.fps || window.currentFps || 0;
        this.cells = window.cellCount || 0;
        if (_0xcb822e.mass) {
          if (_0x1f59fa.settings.shortMass) {
            this.mass = _0x1f59fa.getShortMass(_0xcb822e.mass);
          } else {
            this.mass = _0xcb822e.mass;
          }
        } else {
          this.mass = 0;
        }
      });
      
      // Update FPS periodically even if stats-changed event isn't triggered
      this.fpsInterval = setInterval(() => {
        if (window.currentFps && this.fps === 0) {
          this.fps = window.currentFps;
        }
      }, 1000);
    },
    beforeDestroy() {
      if (this.fpsInterval) {
        clearInterval(this.fpsInterval);
      }
    }
  };
  _0x2afb1(247);
  var _0x383488 = Object(_0x4db777.a)(_0x2f475a, _0x564c2d, [], false, null, "0875ad82", null);
  _0x383488.options.__file = "src/components/stats.vue";
  var _0x5ca8c8 = _0x383488.exports;
  function _0x1789e9() {
    var _0x3830d6 = this;
    var _0x87b353 = _0x3830d6.$createElement;
    var _0x51d07b = _0x3830d6._self._c || _0x87b353;
    return _0x51d07b("div", {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: _0x3830d6.visible,
        expression: "visible"
      }],
      attrs: {
        id: "chatbox"
      }
    }, [_0x51d07b("div", {
      ref: "list",
      attrs: {
        id: "message-list"
      },
      on: {
        click: function (_0xf8476e) {
          return _0x3830d6.onChatClick(_0xf8476e);
        }
      }
    }, _0x3830d6._l(_0x3830d6.messages, function (_0x54d08e, _0x3a7930) {
      return _0x51d07b("div", {
        key: _0x3a7930,
        staticClass: "message-row"
      }, [_0x54d08e.from ? _0x51d07b("span", {
        staticClass: "message-from",
        style: {
          color: _0x54d08e.fromColor
        },
        attrs: {
          "data-pid": _0x54d08e.pid
        }
      }, [_0x3830d6._v(_0x3830d6._s(_0x54d08e.from) + ":")]) : _0x3830d6._e(), _0x3830d6._v(" "), _0x51d07b("span", {
        staticClass: "message-text",
        style: {
          color: _0x54d08e.textColor
        }
      }, [_0x3830d6._v(_0x3830d6._s(_0x54d08e.text))])]);
    }), 0), _0x3830d6._v(" "), _0x51d07b("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: _0x3830d6.inputText,
        expression: "inputText"
      }],
      ref: "input",
      attrs: {
        id: "chatbox-input",
        type: "text",
        maxlength: "100",
        placeholder: "Type your message here"
      },
      domProps: {
        value: _0x3830d6.inputText
      },
      on: {
        keydown: function (_0x41ef9f) {
          if (!_0x41ef9f.type.indexOf("key") && _0x3830d6._k(_0x41ef9f.keyCode, "enter", 13, _0x41ef9f.key, "Enter")) {
            return null;
          } else {
            return _0x3830d6.sendChatMessage();
          }
        },
        input: function (_0x412547) {
          if (!_0x412547.target.composing) {
            _0x3830d6.inputText = _0x412547.target.value;
          }
        }
      }
    })]);
  }
  _0x1789e9._withStripped = true;
  var _0x3cc900 = _0x2afb1(1);
  var _0xd96cb1 = {
    data: () => ({
      visible: false,
      inputText: "",
      messages: []
    }),
    methods: {
      onChatClick(_0x37ab52) {
        var _0x38046e = _0x37ab52.target.dataset.pid;
        if (_0x38046e) {
          _0x3cc900.selectedPlayer = _0x38046e;
        }
      },
      sendChatMessage() {
        var _0x568a8b = this.inputText.trim();
        if (_0x568a8b) {
          if (_0x3cc900.selectedPlayer) {
            _0x568a8b = _0x568a8b.replace(/\$pid/g, _0x3cc900.selectedPlayer);
          }
          _0x3cc900.sendChatMessage(_0x568a8b);
          this.inputText = "";
        }
        _0x3cc900.renderer.view.focus();
      },
      onChatMessage(_0x3283ee) {
        _0x3283ee.fromColor = _0x3283ee.fromColor || "#ffffff";
        _0x3283ee.textColor = _0x3283ee.textColor || "#ffffff";
        this.messages.push(_0x3283ee);
        if (this.messages.length > 30) {
          this.messages.shift();
        }
        this.$nextTick(this.scrollBottom);
      },
      onVisibilityChange(_0x3a0a5e) {
        this.visible = _0x3a0a5e;
        if (_0x3a0a5e) {
          this.$nextTick(this.scrollBottom);
        }
      },
      focusChat() {
        if (this.visible) {
          this.$refs.input.focus();
        }
      },
      clearChat() {
        this.messages = [];
      },
      scrollBottom() {
        var _0x1f0d6d = this.$refs.list;
        _0x1f0d6d.scrollTop = _0x1f0d6d.scrollHeight;
      }
    },
    created() {
      _0x3cc900.events.$on("chat-visible", this.onVisibilityChange);
      _0x3cc900.events.$on("chat-focus", this.focusChat);
      _0x3cc900.events.$on("chat-message", this.onChatMessage);
      _0x3cc900.events.$on("chat-clear", this.clearChat);
    }
  };
  _0x2afb1(249);
  var _0xb8dc99 = Object(_0x4db777.a)(_0xd96cb1, _0x1789e9, [], false, null, "4900a413", null);
  _0xb8dc99.options.__file = "src/components/chatbox.vue";
  var _0x168e03 = _0xb8dc99.exports;
  function _0x128d4b() {
    var _0x265e7f = this;
    var _0x26f8e2 = _0x265e7f.$createElement;
    var _0x4ab1f5 = _0x265e7f._self._c || _0x26f8e2;
    return _0x4ab1f5("div", {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: _0x265e7f.visible,
        expression: "visible"
      }],
      attrs: {
        id: "leaderboard"
      }
    }, [_0x4ab1f5("div", {
      staticClass: "leaderboard-title"
    }, [_0x265e7f._v("Leaderboard")]), _0x265e7f._v(" "), _0x4ab1f5("div", _0x265e7f._l(_0x265e7f.leaderboard, function (_0x44ad94, _0x550f07) {
      // Determine if this is Echo
      var isEcho = (_0x44ad94.text === "Echo" || 
                    (typeof _0x44ad94.text === "string" && _0x44ad94.text.toLowerCase() === "echo"));
      
      return _0x4ab1f5("div", {
        key: _0x550f07,
        staticClass: "leaderboard-label"
      }, [_0x4ab1f5("span", {
        attrs: {
          "data-player-echo": isEcho
        },
        style: {
          color: isEcho ? "#ff0000" : _0x44ad94.color
        }
      }, [_0x265e7f._v(_0x265e7f._s(_0x550f07 + 1) + ". " + _0x265e7f._s(_0x44ad94.text))])]);
    }), 0)]);
  }
  _0x128d4b._withStripped = true;
  var _0x3d75ca = _0x2afb1(1);
  _0x2afb1(6);
  var _0xb69ba5 = {
    data: () => ({
      visible: false,
      leaderboard: []
    }),
    methods: {
      updateLeaderboard(_0x3dce66) {
        this.leaderboard = _0x3dce66;
      },
      onLeaderboardShow() {
        if (!this.visible) {
          _0x3d75ca.events.$on("leaderboard-update", this.updateLeaderboard);
          this.visible = true;
        }
      },
      onLeaderboardHide() {
        if (this.visible) {
          _0x3d75ca.events.$off("leaderboard-update", this.updateLeaderboard);
          this.leaderboard = [];
          this.visible = false;
        }
      }
    },
    created() {
      _0x3d75ca.events.$on("leaderboard-show", this.onLeaderboardShow);
      _0x3d75ca.events.$on("leaderboard-hide", this.onLeaderboardHide);
    }
  };
  _0x2afb1(251);
  var _0x5b21d6 = Object(_0x4db777.a)(_0xb69ba5, _0x128d4b, [], false, null, "8a0c31c6", null);
  _0x5b21d6.options.__file = "src/components/leaderboard.vue";
  var _0x162c13 = _0x5b21d6.exports;
  var _0x21ff4c = {
    components: {
      stats: _0x5ca8c8,
      chatbox: _0x168e03,
      minimap: _0x2afb1(115).default,
      leaderboard: _0x162c13
    },
    data: () => ({})
  };
  _0x2afb1(255);
  var _0x3a211e = Object(_0x4db777.a)(_0x21ff4c, _0x12be22, [], false, null, "339660d2", null);
  _0x3a211e.options.__file = "src/components/hud.vue";
  var _0x3af7b8 = _0x3a211e.exports;
  function _0x4db72e() {
    var _0x165d87 = this;
    var _0x31d7b5 = _0x165d87.$createElement;
    var _0x3aa964 = _0x165d87._self._c || _0x31d7b5;
    return _0x3aa964("transition", {
      attrs: {
        name: "menu"
      }
    }, [_0x3aa964("div", {
      staticClass: "container"
    }, [_0x3aa964("div", {
      staticClass: "fade-box box-1"
    }, [_0x3aa964("div", {
      staticStyle: {
        padding: "4px"
      }
    }, [_0x165d87._v("Advertisement")]), _0x165d87._v(" "), _0x3aa964("div", {
      staticStyle: {
        padding: "10px",
        "padding-top": "0px"
      }
    }, [_0x3aa964("div", {
      attrs: {
        id: "vanis-io_300x250_2"
      }
    })])]), _0x165d87._v(" "), _0x165d87.stats ? _0x3aa964("div", {
      staticClass: "fade-box",
      class: {
        scroll: _0x165d87.isLoadingAd
      }
    }, [_0x3aa964("div", {
      staticStyle: {
        padding: "15px"
      }
    }, [_0x3aa964("div", [_0x165d87._v("Time Alive: " + _0x165d87._s(_0x165d87.timeAlive))]), _0x165d87._v(" "), _0x3aa964("div", [_0x165d87._v("Highscore: " + _0x165d87._s(_0x165d87.highscore))]), _0x165d87._v(" "), _0x3aa964("div", [_0x165d87._v("Players Eaten: " + _0x165d87._s(_0x165d87.stats.killCount))]), _0x165d87._v(" "), _0x3aa964("btn", {
      staticClass: "continue",
      nativeOn: {
        click: function (_0x15becc) {
          return _0x165d87.onContinueClick(_0x15becc);
        }
      }
    }, [_0x165d87._v("Continue")])], 1)]) : _0x165d87._e()])]);
  }
  _0x4db72e._withStripped = true;
  var _0x12d9f3 = _0x2afb1(1);
  var _0x50d4e0 = _0x2afb1(74);
  var _0x429dd1 = {
    props: ["stats"],
    data: () => ({
      isLoadingAd: false
    }),
    methods: {
      loadAd: function () {
        this.isLoadingAd = _0x50d4e0.refreshAd("death-box");
      },
      onContinueClick: function () {
        _0x12d9f3.state.loadingAds = false;
        _0x12d9f3.showDeathScreen(false);
        _0x12d9f3.showMenu(true);
      }
    },
    watch: {
      stats: function () {}
    },
    computed: {
      timeAlive: function () {
        var _0x3c1aa8 = this.stats.timeAlive;
        if (_0x3c1aa8 < 60) {
          return _0x3c1aa8 + "s";
        } else {
          return Math.floor(_0x3c1aa8 / 60) + "min " + _0x3c1aa8 % 60 + "s";
        }
      },
      highscore: function () {
        var _0x1d285b = this.stats.highscore;
        return _0x12d9f3.getShortMass(_0x1d285b);
      }
    }
  };
  _0x2afb1(257);
  var _0x486836 = Object(_0x4db777.a)(_0x429dd1, _0x4db72e, [], false, null, "3249d726", null);
  _0x486836.options.__file = "src/components/death-stats.vue";
  var _0xeebf8c = _0x486836.exports;
  function _0xfd43f9() {
    var _0x295618 = this.$createElement;
    return (this._self._c || _0x295618)("button", {
      staticClass: "btn"
    }, [this._t("default", [this._v("Here should be something")])], 2);
  }
  _0xfd43f9._withStripped = true;
  var _0x1be727 = {};
  _0x2afb1(259);
  var _0x432e33 = Object(_0x4db777.a)(_0x1be727, _0xfd43f9, [], false, null, "b0b10308", null);
  _0x432e33.options.__file = "src/components/btn.vue";
  var _0x5eafa9 = _0x432e33.exports;
  function _0x1d3047() {
    var _0x21e241 = this;
    var _0x50776b = _0x21e241.$createElement;
    var _0x5b7c2c = _0x21e241._self._c || _0x50776b;
    if (_0x21e241.show) {
      return _0x5b7c2c("div", {
        class: {
          "auto-hide": _0x21e241.autoHideReplayControls
        },
        attrs: {
          id: "replay-controls"
        }
      }, [_0x5b7c2c("div", {
        staticStyle: {
          "text-align": "right"
        }
      }, [_0x5b7c2c("div", [_0x21e241._v("Opacity " + _0x21e241._s(_0x21e241.cellOpacity) + "%")]), _0x21e241._v(" "), _0x5b7c2c("div", [_0x5b7c2c("input", {
        directives: [{
          name: "model",
          rawName: "v-model",
          value: _0x21e241.cellOpacity,
          expression: "cellOpacity"
        }],
        staticClass: "replay-slider",
        staticStyle: {
          width: "105px",
          display: "inline-block"
        },
        attrs: {
          id: "replay-opacity-slider",
          type: "range",
          min: "10",
          max: "100"
        },
        domProps: {
          value: _0x21e241.cellOpacity
        },
        on: {
          input: _0x21e241.onCellOpacitySlide,
          __r: function (_0x48470b) {
            _0x21e241.cellOpacity = _0x48470b.target.value;
          }
        }
      })])]), _0x21e241._v(" "), _0x5b7c2c("div", {
        staticStyle: {
          "margin-bottom": "5px",
          display: "flex"
        }
      }, [_0x5b7c2c("div", {
        staticStyle: {
          flex: "1"
        }
      }, [_0x21e241._v("Packet " + _0x21e241._s(_0x21e241.replayIndex) + " / " + _0x21e241._s(_0x21e241.packetCount))]), _0x21e241._v(" "), _0x5b7c2c("div", {
        staticStyle: {
          "margin-right": "10px"
        }
      }, [_0x5b7c2c("input", {
        directives: [{
          name: "model",
          rawName: "v-model",
          value: _0x21e241.autoHideReplayControls,
          expression: "autoHideReplayControls"
        }],
        attrs: {
          type: "checkbox",
          id: "replay-auto-hide-controls"
        },
        domProps: {
          checked: Array.isArray(_0x21e241.autoHideReplayControls) ? _0x21e241._i(_0x21e241.autoHideReplayControls, null) > -1 : _0x21e241.autoHideReplayControls
        },
        on: {
          change: [function (_0x1aad2d) {
            var _0x2e013a = _0x21e241.autoHideReplayControls;
            var _0x2a918c = _0x1aad2d.target;
            var _0xa1a7ba = !!_0x2a918c.checked;
            if (Array.isArray(_0x2e013a)) {
              var _0x511123 = _0x21e241._i(_0x2e013a, null);
              if (_0x2a918c.checked) {
                if (_0x511123 < 0) {
                  _0x21e241.autoHideReplayControls = _0x2e013a.concat([null]);
                }
              } else if (_0x511123 > -1) {
                _0x21e241.autoHideReplayControls = _0x2e013a.slice(0, _0x511123).concat(_0x2e013a.slice(_0x511123 + 1));
              }
            } else {
              _0x21e241.autoHideReplayControls = _0xa1a7ba;
            }
          }, _0x21e241.saveAutoHideControls]
        }
      }), _0x21e241._v(" "), _0x5b7c2c("label", {
        attrs: {
          for: "replay-auto-hide-controls"
        }
      }, [_0x21e241._v("Auto Hide Controls")])])]), _0x21e241._v(" "), _0x5b7c2c("input", {
        directives: [{
          name: "model",
          rawName: "v-model",
          value: _0x21e241.rangeIndex,
          expression: "rangeIndex"
        }],
        staticClass: "replay-slider",
        attrs: {
          type: "range",
          min: _0x21e241.rangeMin,
          max: _0x21e241.rangeMax
        },
        domProps: {
          value: _0x21e241.rangeIndex
        },
        on: {
          input: _0x21e241.onSlide,
          change: _0x21e241.onSlideEnd,
          __r: function (_0x5833a7) {
            _0x21e241.rangeIndex = _0x5833a7.target.value;
          }
        }
      })]);
    } else {
      return _0x21e241._e();
    }
  }
  _0x1d3047._withStripped = true;
  var _0x1212d0 = _0x2afb1(1);
  var _0x4e9a67 = {
    data: () => ({
      show: false,
      autoHideReplayControls: _0x1212d0.settings.autoHideReplayControls,
      drawDelay: _0x1212d0.settings.drawDelay,
      cellOpacity: 100,
      rangeMin: 0,
      rangeIndex: 0,
      rangeMax: 1000,
      replayIndex: 0,
      packetCount: 0
    }),
    created: function () {
      _0x1212d0.events.$on("show-replay-controls", this.onShow);
      _0x1212d0.events.$on("replay-index-change", this.onReplayIndexChange);
    },
    methods: {
      onShow(_0x3e45db) {
        if (_0x3e45db) {
          this.show = true;
          this.packetCount = _0x3e45db - 1;
        } else {
          this.show = false;
          this.cellOpacity = 100;
          this.rangeIndex = 0;
          this.packetCount = 0;
        }
      },
      onReplayIndexChange(_0x41dee6) {
        var _0x14297a = _0x41dee6 / this.packetCount;
        this.rangeIndex = Math.floor(_0x14297a * this.rangeMax);
        this.replayIndex = _0x41dee6;
      },
      onSlide(_0x856d09) {
        if (_0x1212d0.moveInterval) {
          clearInterval(_0x1212d0.moveInterval);
          _0x1212d0.moveInterval = null;
        }
        this.replayIndex = _0x1212d0.replayMoveTo(this.rangeIndex / this.rangeMax);
      },
      onSlideEnd(_0x1dd011) {
        if (!_0x1212d0.moveInterval) {
          _0x1212d0.moveInterval = // TOLOOK
          setInterval(_0x1212d0.replayUpdate, 12200);
        }
      },
      onCellOpacitySlide() {
        _0x1212d0.scene.foreground.alpha = this.cellOpacity / 100;
      },
      saveAutoHideControls() {
        _0x1212d0.settings.set("autoHideReplayControls", this.autoHideReplayControls);
      }
    }
  };
  _0x2afb1(261);
  var _0x3107a6 = Object(_0x4db777.a)(_0x4e9a67, _0x1d3047, [], false, null, "c2c2ac08", null);
  _0x3107a6.options.__file = "src/components/replay-controls.vue";
  var _0x34761b = _0x3107a6.exports;
  function _0x22a063() {
    var _0x1cd2d1 = this.$createElement;
    var _0x3c9af0 = this._self._c || _0x1cd2d1;
    if (this.show) {
      return _0x3c9af0("div", {
        attrs: {
          id: "ab-overlay"
        }
      }, [this._m(0)]);
    } else {
      return this._e();
    }
  }
  _0x22a063._withStripped = true;
  _0x475f64.a.use(_0x47a0fe.a);
  var _0x3a0e97 = _0x2afb1(6);
  _0x475f64.a.component("btn", _0x5eafa9);
  window.app = new _0x475f64.a({
    el: "#app",
    data: {
      showHud: _0x3a0e97.showHud,
      showMenu: true,
      showDeathScreen: false,
      deathStats: null
    },
    components: {
      mainContainer: _0x42bc8a,
      socialLinks: _0x42f578,
      privacyTos: _0x2f45d0,
      contextMenu: _0x3f1c64,
      hud: _0x3af7b8,
      deathStats: _0xeebf8c,
      replayControls: _0x34761b
    }
  });
}]);