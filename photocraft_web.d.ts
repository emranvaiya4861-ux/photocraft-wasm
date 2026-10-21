/* tslint:disable */
/* eslint-disable */

/**
 * Start the PhotoCraft web application.
 *
 * Mounts the application canvas and initializes the eframe web runner.
 */
export function start(): void;

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
    readonly memory: WebAssembly.Memory;
    readonly start: () => void;
    readonly wasm_bindgen_706d22576d668379___convert__closures_____invoke___js_sys_4c07396ac1363c63___Function_fn_wasm_bindgen_706d22576d668379___JsValue_____wasm_bindgen_706d22576d668379___sys__Undefined___js_sys_4c07396ac1363c63___Function_fn_wasm_bindgen_706d22576d668379___JsValue_____wasm_bindgen_706d22576d668379___sys__Undefined_______true_: (a: number, b: number, c: any, d: any) => void;
    readonly wasm_bindgen_706d22576d668379___convert__closures_____invoke___wasm_bindgen_706d22576d668379___JsValue__core_37ee0ce0c4cd57d5___result__Result_____wasm_bindgen_706d22576d668379___JsError___true_: (a: number, b: number, c: any) => [number, number];
    readonly wasm_bindgen_706d22576d668379___convert__closures_____invoke___wasm_bindgen_706d22576d668379___sys__JsNullable_wgpu_3e003526bf5bcd07___backend__webgpu__webgpu_sys__gen_GpuError__GpuError___core_37ee0ce0c4cd57d5___result__Result_____wasm_bindgen_706d22576d668379___JsError___true_: (a: number, b: number, c: any) => [number, number];
    readonly wasm_bindgen_706d22576d668379___convert__closures_____invoke___wasm_bindgen_706d22576d668379___sys__JsNullable_wgpu_3e003526bf5bcd07___backend__webgpu__webgpu_sys__gen_GpuError__GpuError___core_37ee0ce0c4cd57d5___result__Result_____wasm_bindgen_706d22576d668379___JsError___true__11: (a: number, b: number, c: any) => [number, number];
    readonly wasm_bindgen_706d22576d668379___convert__closures_____invoke___wasm_bindgen_706d22576d668379___sys__JsNullable_wgpu_3e003526bf5bcd07___backend__webgpu__webgpu_sys__gen_GpuError__GpuError___core_37ee0ce0c4cd57d5___result__Result_____wasm_bindgen_706d22576d668379___JsError___true__12: (a: number, b: number, c: any) => [number, number];
    readonly wasm_bindgen_706d22576d668379___convert__closures_____invoke___core_37ee0ce0c4cd57d5___result__Result_____wasm_bindgen_706d22576d668379___JsValue___true_: (a: number, b: number) => [number, number];
    readonly wasm_bindgen_706d22576d668379___convert__closures_____invoke___js_sys_4c07396ac1363c63___Array______true_: (a: number, b: number, c: any) => void;
    readonly wasm_bindgen_706d22576d668379___convert__closures_____invoke___js_sys_4c07396ac1363c63___Array______true__5: (a: number, b: number, c: any) => void;
    readonly wasm_bindgen_706d22576d668379___convert__closures_____invoke___web_sys_7271e51e70fe8153___features__gen_MouseEvent__MouseEvent______true_: (a: number, b: number, c: any) => void;
    readonly wasm_bindgen_706d22576d668379___convert__closures_____invoke___web_sys_7271e51e70fe8153___features__gen_MouseEvent__MouseEvent______true__10: (a: number, b: number, c: any) => void;
    readonly wasm_bindgen_706d22576d668379___convert__closures_____invoke___web_sys_7271e51e70fe8153___features__gen_MouseEvent__MouseEvent______true__9: (a: number, b: number, c: any) => void;
    readonly wasm_bindgen_706d22576d668379___convert__closures_____invoke___wgpu_3e003526bf5bcd07___backend__webgpu__webgpu_sys__gen_GpuDeviceLostInfo__GpuDeviceLostInfo______true_: (a: number, b: number, c: any) => void;
    readonly wasm_bindgen_706d22576d668379___convert__closures_____invoke___wgpu_3e003526bf5bcd07___backend__webgpu__webgpu_sys__gen_GpuDeviceLostInfo__GpuDeviceLostInfo______true__8: (a: number, b: number, c: any) => void;
    readonly wasm_bindgen_706d22576d668379___convert__closures_____invoke_______true_: (a: number, b: number) => void;
    readonly __wbindgen_malloc: (a: number, b: number) => number;
    readonly __wbindgen_realloc: (a: number, b: number, c: number, d: number) => number;
    readonly __wbindgen_exn_store: (a: number) => void;
    readonly __externref_table_alloc: () => number;
    readonly __wbindgen_externrefs: WebAssembly.Table;
    readonly __wbindgen_free: (a: number, b: number, c: number) => void;
    readonly __wbindgen_destroy_closure: (a: number, b: number) => void;
    readonly __externref_table_dealloc: (a: number) => void;
    readonly __wbindgen_start: () => void;
}

export type SyncInitInput = BufferSource | WebAssembly.Module;

/**
 * Instantiates the given `module`, which can either be bytes or
 * a precompiled `WebAssembly.Module`.
 *
 * @param {{ module: SyncInitInput }} module - Passing `SyncInitInput` directly is deprecated.
 *
 * @returns {InitOutput}
 */
export function initSync(module: { module: SyncInitInput } | SyncInitInput): InitOutput;

/**
 * If `module_or_path` is {RequestInfo} or {URL}, makes a request and
 * for everything else, calls `WebAssembly.instantiate` directly.
 *
 * @param {{ module_or_path: InitInput | Promise<InitInput> }} module_or_path - Passing `InitInput` directly is deprecated.
 *
 * @returns {Promise<InitOutput>}
 */
export default function __wbg_init (module_or_path?: { module_or_path: InitInput | Promise<InitInput> } | InitInput | Promise<InitInput>): Promise<InitOutput>;
