// DocPad Configuration File
// http://docpad.org/docs/config

// Define the DocPad Configuration
var docpadConfig = {
	templateData: {
        getTime: function() {
            return +new Date;
        }
	},

    collections: {
        qa: function() {
            var docpad = this;

            return docpad.getCollection('documents')
                .findAllLive({relativeDirPath: 'qa', extension: 'md'});
        }
    }
};

// Export the DocPad Configuration
module.exports = docpadConfig;