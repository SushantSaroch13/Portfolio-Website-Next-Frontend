"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/article/[slug]",{

/***/ "./src/pages/article/[slug].jsx":
/*!**************************************!*\
  !*** ./src/pages/article/[slug].jsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   revalidate: function() { return /* binding */ revalidate; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _lib_sanity__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/lib/sanity */ \"./src/lib/sanity.js\");\n/* harmony import */ var _components_Card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/Card */ \"./src/components/Card.jsx\");\n/* harmony import */ var _components_SimpleLayout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/SimpleLayout */ \"./src/components/SimpleLayout.jsx\");\n/* harmony import */ var _lib_formatDate__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/lib/formatDate */ \"./src/lib/formatDate.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _portabletext_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @portabletext/react */ \"./node_modules/@portabletext/react/dist/index.js\");\n/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/components/Container */ \"./src/components/Container.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nconst revalidate = 30 // revalidate at most every 30 sec\n;\nconst Page = ()=>{\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const slug = router.query.slug;\n    const [data, setPosts] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)({});\n    (0,react__WEBPACK_IMPORTED_MODULE_7__.useEffect)(()=>{\n        async function fetchData() {\n            try {\n                const { slug } = router.query;\n                if (!slug) {\n                    // Handle the case when slug is undefined or null\n                    console.warn(\"Slug is undefined or null.\");\n                    return;\n                }\n                const query = `*[_type == 'blog' && slug.current == $slug]{\r\n                    \"currentSlug\": slug.current,\r\n                    title,\r\n                    content,\r\n                    titleImage,\r\n                    publishedAt\r\n                }[0]`;\n                const res = await _lib_sanity__WEBPACK_IMPORTED_MODULE_3__.client.fetch(query, {\n                    slug\n                });\n                setPosts(res || {});\n            // console.log(\"result: \", res);\n            } catch (err) {\n                console.error(err);\n            }\n        }\n        ;\n        if (slug) {\n            fetchData();\n        }\n    }, [\n        slug\n    ]); // Include router.query.slug in the dependencies array\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                className: \"block mt-5 text-base text-center text-primary font-semibold tracking-wide uppercase dark:invert\",\n                children: \"Sushant Saroch - Blog\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Sushant Saroch\\\\OneDrive\\\\Documents\\\\GitHub\\\\Portfolio Website\\\\Next-Frontend\\\\src\\\\pages\\\\article\\\\[slug].jsx\",\n                lineNumber: 51,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Container__WEBPACK_IMPORTED_MODULE_8__.Container, {\n                className: \"mt-16 sm:mt-32\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                        className: \"max-w-2xl\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl\",\n                            children: data.title\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Sushant Saroch\\\\OneDrive\\\\Documents\\\\GitHub\\\\Portfolio Website\\\\Next-Frontend\\\\src\\\\pages\\\\article\\\\[slug].jsx\",\n                            lineNumber: 56,\n                            columnNumber: 21\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Sushant Saroch\\\\OneDrive\\\\Documents\\\\GitHub\\\\Portfolio Website\\\\Next-Frontend\\\\src\\\\pages\\\\article\\\\[slug].jsx\",\n                        lineNumber: 55,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mt-6\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Card__WEBPACK_IMPORTED_MODULE_4__.Card.Eyebrow, {\n                            as: \"time\",\n                            dateTime: data.publishedAt,\n                            decorate: true,\n                            children: (0,_lib_formatDate__WEBPACK_IMPORTED_MODULE_6__.formatDate)(data.publishedAt)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Sushant Saroch\\\\OneDrive\\\\Documents\\\\GitHub\\\\Portfolio Website\\\\Next-Frontend\\\\src\\\\pages\\\\article\\\\[slug].jsx\",\n                            lineNumber: 61,\n                            columnNumber: 21\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Sushant Saroch\\\\OneDrive\\\\Documents\\\\GitHub\\\\Portfolio Website\\\\Next-Frontend\\\\src\\\\pages\\\\article\\\\[slug].jsx\",\n                        lineNumber: 60,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mt-5 sm:mt-20\",\n                        children: data.titleImage && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            src: (0,_lib_sanity__WEBPACK_IMPORTED_MODULE_3__.urlFor)(data.titleImage).url(),\n                            alt: \"Image\",\n                            width: 500,\n                            height: 500,\n                            className: \"rounded-t-lg mt-8 border\",\n                            priority: true\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Sushant Saroch\\\\OneDrive\\\\Documents\\\\GitHub\\\\Portfolio Website\\\\Next-Frontend\\\\src\\\\pages\\\\article\\\\[slug].jsx\",\n                            lineNumber: 67,\n                            columnNumber: 25\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Sushant Saroch\\\\OneDrive\\\\Documents\\\\GitHub\\\\Portfolio Website\\\\Next-Frontend\\\\src\\\\pages\\\\article\\\\[slug].jsx\",\n                        lineNumber: 65,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                        className: \"max-w-2xl\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"mt-6 text-base prose prose-blue prose-lg text-zinc-600 dark:text-zinc-400 dark:prose-invert\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_portabletext_react__WEBPACK_IMPORTED_MODULE_9__.PortableText, {\n                                value: data.content\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Sushant Saroch\\\\OneDrive\\\\Documents\\\\GitHub\\\\Portfolio Website\\\\Next-Frontend\\\\src\\\\pages\\\\article\\\\[slug].jsx\",\n                                lineNumber: 79,\n                                columnNumber: 25\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Sushant Saroch\\\\OneDrive\\\\Documents\\\\GitHub\\\\Portfolio Website\\\\Next-Frontend\\\\src\\\\pages\\\\article\\\\[slug].jsx\",\n                            lineNumber: 78,\n                            columnNumber: 21\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Sushant Saroch\\\\OneDrive\\\\Documents\\\\GitHub\\\\Portfolio Website\\\\Next-Frontend\\\\src\\\\pages\\\\article\\\\[slug].jsx\",\n                        lineNumber: 77,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Sushant Saroch\\\\OneDrive\\\\Documents\\\\GitHub\\\\Portfolio Website\\\\Next-Frontend\\\\src\\\\pages\\\\article\\\\[slug].jsx\",\n                lineNumber: 54,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(Page, \"uraSYyH9beFGiBv6zvGU142Cm0E=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Page;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Page);\nvar _c;\n$RefreshReg$(_c, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvYXJ0aWNsZS9bc2x1Z10uanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBK0I7QUFDUztBQUNNO0FBQ047QUFDZ0I7QUFDWDtBQUNEO0FBQ087QUFDRDtBQUUzQyxNQUFNVyxhQUFhLEdBQUcsa0NBQWtDO0NBQW5DO0FBRTVCLE1BQU1DLE9BQU87O0lBQ1QsTUFBTUMsU0FBU1osc0RBQVNBO0lBQ3hCLE1BQU1hLE9BQU9ELE9BQU9FLEtBQUssQ0FBQ0QsSUFBSTtJQUM5QixNQUFNLENBQUNFLE1BQU1DLFNBQVMsR0FBR1YsK0NBQVFBLENBQUMsQ0FBQztJQUVuQ0MsZ0RBQVNBLENBQUM7UUFDTixlQUFlVTtZQUNYLElBQUk7Z0JBQ0EsTUFBTSxFQUFFSixJQUFJLEVBQUUsR0FBR0QsT0FBT0UsS0FBSztnQkFFN0IsSUFBSSxDQUFDRCxNQUFNO29CQUNQLGlEQUFpRDtvQkFDakRLLFFBQVFDLElBQUksQ0FBQztvQkFDYjtnQkFDSjtnQkFFQSxNQUFNTCxRQUFRLENBQUM7Ozs7OztvQkFNWCxDQUFDO2dCQUNMLE1BQU1NLE1BQU0sTUFBTW5CLCtDQUFNQSxDQUFDb0IsS0FBSyxDQUFDUCxPQUFPO29CQUFFRDtnQkFBSztnQkFDN0NHLFNBQVNJLE9BQU8sQ0FBQztZQUNqQixnQ0FBZ0M7WUFDcEMsRUFBRSxPQUFPRSxLQUFLO2dCQUNWSixRQUFRSyxLQUFLLENBQUNEO1lBQ2xCO1FBQ0o7O1FBRUEsSUFBSVQsTUFBTTtZQUNOSTtRQUNKO0lBQ0osR0FBRztRQUFDSjtLQUFLLEdBQUcsc0RBQXNEO0lBRWxFLHFCQUNJOzswQkFDSSw4REFBQ1c7Z0JBQUtDLFdBQVU7MEJBQWtHOzs7Ozs7MEJBR2xILDhEQUFDaEIsNERBQVNBO2dCQUFDZ0IsV0FBVTs7a0NBQ2pCLDhEQUFDQzt3QkFBT0QsV0FBVTtrQ0FDZCw0RUFBQ0U7NEJBQUdGLFdBQVU7c0NBQ1RWLEtBQUthLEtBQUs7Ozs7Ozs7Ozs7O2tDQUduQiw4REFBQ0M7d0JBQUlKLFdBQVU7a0NBQ1gsNEVBQUN0QixrREFBSUEsQ0FBQzJCLE9BQU87NEJBQUNDLElBQUc7NEJBQU9DLFVBQVVqQixLQUFLa0IsV0FBVzs0QkFBRUMsUUFBUTtzQ0FDdkQ3QiwyREFBVUEsQ0FBQ1UsS0FBS2tCLFdBQVc7Ozs7Ozs7Ozs7O2tDQUdwQyw4REFBQ0o7d0JBQUlKLFdBQVU7a0NBQ1ZWLEtBQUtvQixVQUFVLGtCQUNaLDhEQUFDcEMsbURBQUtBOzRCQUNGcUMsS0FBS2xDLG1EQUFNQSxDQUFDYSxLQUFLb0IsVUFBVSxFQUFFRSxHQUFHOzRCQUNoQ0MsS0FBSTs0QkFDSkMsT0FBTzs0QkFDUEMsUUFBUTs0QkFDUmYsV0FBVTs0QkFDVmdCLFFBQVE7Ozs7Ozs7Ozs7O2tDQUlwQiw4REFBQ2Y7d0JBQU9ELFdBQVU7a0NBQ2QsNEVBQUNJOzRCQUFJSixXQUFVO3NDQUNYLDRFQUFDakIsNkRBQVlBO2dDQUFDa0MsT0FBTzNCLEtBQUs0QixPQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPekQ7R0F6RU1oQzs7UUFDYVgsa0RBQVNBOzs7S0FEdEJXO0FBMkVOLCtEQUFlQSxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9hcnRpY2xlL1tzbHVnXS5qc3g/MDM2ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHsgY2xpZW50LCB1cmxGb3IgfSBmcm9tIFwiQC9saWIvc2FuaXR5XCI7XHJcbmltcG9ydCB7IENhcmQgfSBmcm9tICdAL2NvbXBvbmVudHMvQ2FyZCdcclxuaW1wb3J0IHsgU2ltcGxlTGF5b3V0IH0gZnJvbSAnQC9jb21wb25lbnRzL1NpbXBsZUxheW91dCdcclxuaW1wb3J0IHsgZm9ybWF0RGF0ZSB9IGZyb20gJ0AvbGliL2Zvcm1hdERhdGUnXHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFBvcnRhYmxlVGV4dCB9IGZyb20gJ0Bwb3J0YWJsZXRleHQvcmVhY3QnO1xyXG5pbXBvcnQgeyBDb250YWluZXIgfSBmcm9tICdAL2NvbXBvbmVudHMvQ29udGFpbmVyJ1xyXG5cclxuZXhwb3J0IGNvbnN0IHJldmFsaWRhdGUgPSAzMCAvLyByZXZhbGlkYXRlIGF0IG1vc3QgZXZlcnkgMzAgc2VjXHJcblxyXG5jb25zdCBQYWdlID0gKCkgPT4ge1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgICBjb25zdCBzbHVnID0gcm91dGVyLnF1ZXJ5LnNsdWc7XHJcbiAgICBjb25zdCBbZGF0YSwgc2V0UG9zdHNdID0gdXNlU3RhdGUoe30pO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgYXN5bmMgZnVuY3Rpb24gZmV0Y2hEYXRhKCkge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgeyBzbHVnIH0gPSByb3V0ZXIucXVlcnk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCFzbHVnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gSGFuZGxlIHRoZSBjYXNlIHdoZW4gc2x1ZyBpcyB1bmRlZmluZWQgb3IgbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybignU2x1ZyBpcyB1bmRlZmluZWQgb3IgbnVsbC4nKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgcXVlcnkgPSBgKltfdHlwZSA9PSAnYmxvZycgJiYgc2x1Zy5jdXJyZW50ID09ICRzbHVnXXtcclxuICAgICAgICAgICAgICAgICAgICBcImN1cnJlbnRTbHVnXCI6IHNsdWcuY3VycmVudCxcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZSxcclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50LFxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlSW1hZ2UsXHJcbiAgICAgICAgICAgICAgICAgICAgcHVibGlzaGVkQXRcclxuICAgICAgICAgICAgICAgIH1bMF1gO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgY2xpZW50LmZldGNoKHF1ZXJ5LCB7IHNsdWcgfSk7XHJcbiAgICAgICAgICAgICAgICBzZXRQb3N0cyhyZXMgfHwge30pO1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJyZXN1bHQ6IFwiLCByZXMpO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGlmIChzbHVnKSB7XHJcbiAgICAgICAgICAgIGZldGNoRGF0YSgpO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtzbHVnXSk7IC8vIEluY2x1ZGUgcm91dGVyLnF1ZXJ5LnNsdWcgaW4gdGhlIGRlcGVuZGVuY2llcyBhcnJheVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdibG9jayBtdC01IHRleHQtYmFzZSB0ZXh0LWNlbnRlciB0ZXh0LXByaW1hcnkgZm9udC1zZW1pYm9sZCB0cmFja2luZy13aWRlIHVwcGVyY2FzZSBkYXJrOmludmVydCc+XHJcbiAgICAgICAgICAgICAgICBTdXNoYW50IFNhcm9jaCAtIEJsb2dcclxuICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICA8Q29udGFpbmVyIGNsYXNzTmFtZT1cIm10LTE2IHNtOm10LTMyXCI+XHJcbiAgICAgICAgICAgICAgICA8aGVhZGVyIGNsYXNzTmFtZT1cIm1heC13LTJ4bFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTR4bCBmb250LWJvbGQgdHJhY2tpbmctdGlnaHQgdGV4dC16aW5jLTgwMCBkYXJrOnRleHQtemluYy0xMDAgc206dGV4dC01eGxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2RhdGEudGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9oMT5cclxuICAgICAgICAgICAgICAgIDwvaGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J210LTYnPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDYXJkLkV5ZWJyb3cgYXM9XCJ0aW1lXCIgZGF0ZVRpbWU9e2RhdGEucHVibGlzaGVkQXR9IGRlY29yYXRlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Zm9ybWF0RGF0ZShkYXRhLnB1Ymxpc2hlZEF0KX1cclxuICAgICAgICAgICAgICAgICAgICA8L0NhcmQuRXllYnJvdz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC01IHNtOm10LTIwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge2RhdGEudGl0bGVJbWFnZSAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXt1cmxGb3IoZGF0YS50aXRsZUltYWdlKS51cmwoKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIkltYWdlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXs1MDB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezUwMH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJvdW5kZWQtdC1sZyBtdC04IGJvcmRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmlvcml0eVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwibWF4LXctMnhsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC02IHRleHQtYmFzZSBwcm9zZSBwcm9zZS1ibHVlIHByb3NlLWxnIHRleHQtemluYy02MDAgZGFyazp0ZXh0LXppbmMtNDAwIGRhcms6cHJvc2UtaW52ZXJ0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxQb3J0YWJsZVRleHQgdmFsdWU9e2RhdGEuY29udGVudH0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvaGVhZGVyPlxyXG5cclxuICAgICAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGFnZTtcclxuIl0sIm5hbWVzIjpbIkltYWdlIiwidXNlUm91dGVyIiwiY2xpZW50IiwidXJsRm9yIiwiQ2FyZCIsIlNpbXBsZUxheW91dCIsImZvcm1hdERhdGUiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIlBvcnRhYmxlVGV4dCIsIkNvbnRhaW5lciIsInJldmFsaWRhdGUiLCJQYWdlIiwicm91dGVyIiwic2x1ZyIsInF1ZXJ5IiwiZGF0YSIsInNldFBvc3RzIiwiZmV0Y2hEYXRhIiwiY29uc29sZSIsIndhcm4iLCJyZXMiLCJmZXRjaCIsImVyciIsImVycm9yIiwic3BhbiIsImNsYXNzTmFtZSIsImhlYWRlciIsImgxIiwidGl0bGUiLCJkaXYiLCJFeWVicm93IiwiYXMiLCJkYXRlVGltZSIsInB1Ymxpc2hlZEF0IiwiZGVjb3JhdGUiLCJ0aXRsZUltYWdlIiwic3JjIiwidXJsIiwiYWx0Iiwid2lkdGgiLCJoZWlnaHQiLCJwcmlvcml0eSIsInZhbHVlIiwiY29udGVudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/article/[slug].jsx\n"));

/***/ })

});