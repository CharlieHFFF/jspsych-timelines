import jsPsychHtmlKeyboardResponseRaf from '@jspsych-contrib/plugin-html-keyboard-response-raf';

export function createTimeline(jsPsych: any, 
    stimuli: any,
    font: number = 48,  
    trial_duration: number = 10000,
    post_trial_gap: number = 500, 
    fixation_duration: number = 500, 
) {

    const timeline = []

    const fixation = {
        type: jsPsychHtmlKeyboardResponseRaf,
        stimulus: `<p style="font-size: 48px; color: gray;">+</p>`,
        choices: "NO_KEYS",
        trial_duration: fixation_duration, 
    }

    const trial = {
        type: jsPsychHtmlKeyboardResponseRaf, 
        stimulus: function() {
            console.log("Stimuli:", stimuli);
            console.log("color", jsPsych.evaluateTimelineVariable('color'))
            return `<p style="color:${jsPsych.evaluateTimelineVariable('color')}; font-size:${font}px;">${jsPsych.evaluateTimelineVariable('word')}</p>`;
        },
        choices: "NO_KEYS", 
        trial_duration: trial_duration, 
        post_trial_gap: post_trial_gap, 
    }

    const full_trial = {
        timeline: [fixation, trial], 
        timeline_variables: stimuli, 
    }

    timeline.push(full_trial)

    return timeline
}