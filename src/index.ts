/* eslint-disable fp/no-mutation */

import { ESLint } from "eslint"
import { CheckGeneralSchema } from "./check-general"

// eslint-disable-next-line @typescript-eslint/no-unused-vars
module.exports = function (results: ESLint.LintResult[], data?: ESLint.LintResultData) {
	const checkResult: CheckGeneralSchema = {
		name: undefined,
		description: "ES Lint results",
		summary: undefined,
		counts: {
			failure: results.map(r => r.errorCount).reduce((prev, curr) => prev + curr),
			warning: results.map(r => r.warningCount).reduce((prev, curr) => prev + curr),
			notice: 0
		},
		byFile: fromKeyValues(results.map(r => {
			return [r.filePath, {
				summary: undefined,
				counts: {
					failure: r.errorCount,
					warning: r.warningCount,
					success: undefined
				},
				details: r.messages.map(msg => {
					return {
						Id: undefined,
						message: msg.message,
						category: ["notice", "warning", "failure"][msg.severity] as "notice" | "warning" | "failure",
						startLine: msg.line,
						endLine: msg.endLine,
						startColumn: msg.column,
						endColumn: msg.endColumn,
					}
				})
			}]
		}))
	}
	return JSON.stringify(checkResult, null, 2)
}

function fromKeyValues<K extends string, V>(keyValues: Iterable<[K, V]>) {
	const obj = {} as Record<K, V>
	// eslint-disable-next-line fp/no-mutation, fp/no-loops
	for (const kv of keyValues) obj[kv[0]] = kv[1]
	return obj
}