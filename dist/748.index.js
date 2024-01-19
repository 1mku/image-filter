(self.webpackChunkwebassembly = self.webpackChunkwebassembly || []).push([
	[748],
	{
		748: (e, n, t) => {
			t.a(e, async (e, r) => {
				try {
					t.r(n),
						t.d(n, {
							__wbg_log_9dfb3879776dd797: () => _.JY,
							__wbg_set_wasm: () => _.oT,
							__wbindgen_object_drop_ref: () => _.ug,
							__wbindgen_string_new: () => _.h4,
							__wbindgen_throw: () => _.Or,
							grayscale: () => _.se,
						});
					var o = t(215),
						_ = t(518),
						c = e([o]);
					(o = (c.then ? (await c)() : c)[0]), (0, _.oT)(o), r();
				} catch (e) {
					r(e);
				}
			});
		},
		518: (e, n, t) => {
			let r;
			function o(e) {
				r = e;
			}
			t.d(n, {
				JY: () => m,
				Or: () => T,
				h4: () => y,
				oT: () => o,
				se: () => h,
				ug: () => p,
			}),
				(e = t.hmd(e));
			const _ = new (
				"undefined" == typeof TextDecoder
					? (0, e.require)("util").TextDecoder
					: TextDecoder
			)("utf-8", { ignoreBOM: !0, fatal: !0 });
			_.decode();
			let c = null;
			function i() {
				return (
					(null !== c && 0 !== c.byteLength) ||
						(c = new Uint8Array(r.memory.buffer)),
					c
				);
			}
			function u(e, n) {
				return (e >>>= 0), _.decode(i().subarray(e, e + n));
			}
			const d = new Array(128).fill(void 0);
			d.push(void 0, null, !0, !1);
			let l = d.length;
			function f(e) {
				return d[e];
			}
			let s = 0,
				a = new (
					"undefined" == typeof TextEncoder
						? (0, e.require)("util").TextEncoder
						: TextEncoder
				)("utf-8");
			const g =
				"function" == typeof a.encodeInto
					? (e, n) => a.encodeInto(e, n)
					: (e, n) => {
							const t = a.encode(e);
							return n.set(t), { read: e.length, written: t.length };
					  };
			let b = null;
			function w() {
				return (
					(null !== b && 0 !== b.byteLength) ||
						(b = new Int32Array(r.memory.buffer)),
					b
				);
			}
			function h(e) {
				let n, t;
				try {
					const c = r.__wbindgen_add_to_stack_pointer(-16),
						d = ((e, n, t) => {
							if (void 0 === t) {
								const t = a.encode(e),
									r = n(t.length, 1) >>> 0;
								return (
									i()
										.subarray(r, r + t.length)
										.set(t),
									(s = t.length),
									r
								);
							}
							let r = e.length,
								o = n(r, 1) >>> 0;
							const _ = i();
							let c = 0;
							for (; c < r; c++) {
								const n = e.charCodeAt(c);
								if (n > 127) break;
								_[o + c] = n;
							}
							if (c !== r) {
								0 !== c && (e = e.slice(c)),
									(o = t(o, r, (r = c + 3 * e.length), 1) >>> 0);
								const n = i().subarray(o + c, o + r);
								c += g(e, n).written;
							}
							return (s = c), o;
						})(e, r.__wbindgen_malloc, r.__wbindgen_realloc),
						l = s;
					r.grayscale(c, d, l);
					var o = w()[c / 4 + 0],
						_ = w()[c / 4 + 1];
					return (n = o), (t = _), u(o, _);
				} finally {
					r.__wbindgen_add_to_stack_pointer(16), r.__wbindgen_free(n, t, 1);
				}
			}
			function y(e, n) {
				return ((e) => {
					l === d.length && d.push(d.length + 1);
					const n = l;
					return (l = d[n]), (d[n] = e), n;
				})(u(e, n));
			}
			function p(e) {
				!((e) => {
					const n = f(e);
					((e) => {
						e < 132 || ((d[e] = l), (l = e));
					})(e);
				})(e);
			}
			function m(e) {
				console.log(f(e));
			}
			function T(e, n) {
				throw new Error(u(e, n));
			}
		},
		215: (e, n, t) => {
			var r = t(518);
			e.exports = t.v(n, e.id, "a81671b965ec34d77444", {
				"./index_bg.js": {
					__wbindgen_string_new: r.h4,
					__wbindgen_object_drop_ref: r.ug,
					__wbg_log_9dfb3879776dd797: r.JY,
					__wbindgen_throw: r.Or,
				},
			});
		},
	},
]);
