$(".dropify").dropify({
	messages: {
		default: "Drag and drop a file here or click to pick an image",
		replace: "Drag and drop a new file or click the remove button to replace",
		remove: "Remove",
		error: "Oops! Something went wrong",
	},
	tpl: {
		clearButton:
			'<button type="button" class="btn btn-primary btn-sm dropify-clear">Replace</button>',
	},
});
