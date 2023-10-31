$(document).ready(function () {
    if (!$) {
        console.critical('jQuery is required')
        return;
    }

    var answerUrl = "",
        fns = {
            initPage: function () {
                fns.buttonBinding();
            },
            buttonBinding: function () {
                $('#answerButton').on('click', function (champion) {
                    var payload = {
                        ChampionName: "Irelia"
                    }

                    fns.submitAnswer(payload);
                });
            },
            submitAnswer: function (data) {
                console.log(JSON.stringify(data));

                //call to controller to check answer
                $.ajax({
                    url: "../api/Champion",
                    type: 'POST',
                    data: JSON.stringify(data),
                    contentType: 'application/json; charset=utf-8',
                    dataType: 'json',
                    success: function (data) {
                        fns.handleAnswerResponse(data);
                    },
                    error: function (data) {
                        console.log('error: ' + data);
                    }
                });
            },
            handleAnswerResponse: function (data) {
                //returns champ data for submitted guess, and attribute comparisons

                if ($('#answerHeaderRow').html() === undefined || $('#answerHeaderRow').html() == '')
                    fns.buildHeaderRow(data);

                fns.buildAnswerRow(data);
            },
            buildHeaderRow: function (data) {
                var headers = ['Champion', 'Gender', 'Position(s)', 'Species', 'Resource', 'Range Type', 'Region(s)', 'Release Year'];

                var headerHtml = '<div class="d-flex flex-row">';

                for (var i = 0; i < headers.length; i++) {
                    headerHtml += '<div class="answerHeader">' + headers[i] + '</div>';
                }

                headerHtml += '</div>';

                $('#answerHeaderRow').html(headerHtml);
            },
            buildAnswerRow: function (data) {
                var headers = ['Champion', 'Gender', 'Position(s)', 'Species', 'Resource', 'Range Type', 'Region(s)', 'Release Year'];

                var dataMapping = [
                    data.Name,
                    data.Gender,
                    data.Positions,
                    data.Species,
                    data.Resource,
                    data.RangeTypes,
                    data.Regions,
                    data.ReleaseYear
                ];

                var headerHtml = '<div class="d-flex flex-row">';

                for (var i = 0; i < headers.length; i++) {
                    headerHtml += '<div class="answerBox">' + dataMapping[i] + '</div>';
                }

                headerHtml += '</div>';

                $('#answerRows').append(headerHtml);
            }
        }

    fns.initPage();
});